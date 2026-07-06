<template>
  <canvas ref="back" class="planet-canvas planet-canvas-back" aria-hidden="true"></canvas>
  <canvas ref="front" class="planet-canvas planet-canvas-front" aria-hidden="true"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const back = ref<HTMLCanvasElement | null>(null)
const front = ref<HTMLCanvasElement | null>(null)
let raf = 0
let ro: ResizeObserver | null = null
let io: IntersectionObserver | null = null

onMounted(() => {
  const backCanvas = back.value
  const frontCanvas = front.value
  if (!backCanvas || !frontCanvas) return
  const cb = backCanvas.getContext('2d')
  const cf = frontCanvas.getContext('2d')
  if (!cb || !cf) return
  const ctxBack = cb
  const ctxFront = cf

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const RING = '#19292b' // dark teal

  // Torus geometry (px) + camera
  const Nu = 90
  const Nv = 16
  const R = 54
  const rt = 6
  const f = 60
  const cx = 49
  const cy = 52

  const N = Nu * Nv
  const bx = new Float32Array(N)
  const by = new Float32Array(N)
  const bz = new Float32Array(N)
  for (let i = 0; i < Nu; i++) {
    const u = (i / Nu) * Math.PI * 2
    const cu = Math.cos(u)
    const su = Math.sin(u)
    for (let j = 0; j < Nv; j++) {
      const v = (j / Nv) * Math.PI * 2
      const k = i * Nv + j
      const rr = R + rt * Math.cos(v)
      bx[k] = rr * cu
      by[k] = rr * su
      bz[k] = rt * Math.sin(v)
    }
  }

  const rz = new Float32Array(N)
  const px = new Float32Array(N)
  const py = new Float32Array(N)

  let W = 0
  let H = 0
  let dpr = 1
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    const rect = backCanvas!.getBoundingClientRect()
    W = rect.width
    H = rect.height
    const w = Math.max(1, Math.round(W * dpr))
    const h = Math.max(1, Math.round(H * dpr))
    backCanvas!.width = w
    backCanvas!.height = h
    frontCanvas!.width = w
    frontCanvas!.height = h
  }

  // Trace one quad into ctx with consistent winding (nonzero fill ⇒ no holes).
  function traceQuad(c: CanvasRenderingContext2D, a: number, b: number, d: number, e: number) {
    const area =
      px[a] * py[b] - px[b] * py[a] +
      (px[b] * py[d] - px[d] * py[b]) +
      (px[d] * py[e] - px[e] * py[d]) +
      (px[e] * py[a] - px[a] * py[e])
    c.moveTo(px[a], py[a])
    if (area >= 0) {
      c.lineTo(px[b], py[b])
      c.lineTo(px[d], py[d])
      c.lineTo(px[e], py[e])
    } else {
      c.lineTo(px[e], py[e])
      c.lineTo(px[d], py[d])
      c.lineTo(px[b], py[b])
    }
    c.closePath()
  }

  function render(t: number) {
    const az = (-15 * Math.PI) / 180
    const cxr = Math.cos(t)
    const sxr = Math.sin(t)
    const cz = Math.cos(az)
    const sz = Math.sin(az)

    for (let k = 0; k < N; k++) {
      const x = bx[k]
      const y = by[k]
      const z = bz[k]
      const y1 = y * cxr - z * sxr
      const z1 = y * sxr + z * cxr
      const x2 = x * cz - y1 * sz
      const y2 = x * sz + y1 * cz
      rz[k] = z1
      const s = f / (f - z1)
      px[k] = cx + x2 * s
      py[k] = cy + y2 * s
    }

    ctxBack.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctxBack.clearRect(0, 0, W, H)
    ctxBack.fillStyle = RING
    ctxBack.beginPath()

    ctxFront.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctxFront.clearRect(0, 0, W, H)
    ctxFront.fillStyle = RING
    ctxFront.beginPath()

    for (let i = 0; i < Nu; i++) {
      const i2 = (i + 1) % Nu
      for (let j = 0; j < Nv; j++) {
        const j2 = (j + 1) % Nv
        const k00 = i * Nv + j
        const k10 = i2 * Nv + j
        const k11 = i2 * Nv + j2
        const k01 = i * Nv + j2
        // far half (behind avatar) vs near half (in front)
        const c = rz[k00] + rz[k10] + rz[k11] + rz[k01] <= 0 ? ctxBack : ctxFront
        traceQuad(c, k00, k10, k11, k01)
      }
    }

    ctxBack.fill()
    ctxFront.fill()
  }

  let running = false
  function loop(time: number) {
    if (!running) return
    render(time * 0.001 * ((Math.PI * 2) / 40)) // 40s per revolution
    raf = requestAnimationFrame(loop)
  }
  function start() {
    if (running) return
    running = true
    raf = requestAnimationFrame(loop)
  }
  function stop() {
    running = false
    cancelAnimationFrame(raf)
  }

  resize()
  ro = new ResizeObserver(() => {
    resize()
    if (reduce || !running) render(0.9)
  })
  ro.observe(backCanvas)

  if (reduce) {
    render(0.9)
  } else {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) start()
          else stop()
        }
      },
      { rootMargin: '80px' },
    )
    io.observe(backCanvas)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
  io?.disconnect()
})
</script>
