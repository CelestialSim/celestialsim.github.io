<template>
  <button 
    id="copyDemoCode" 
    ref="copyDemoBtn"
    @click="copyDemoCode"
    class="btn btn-primary copy-demo-btn inline-btn">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copyDemoBtn = ref<HTMLElement | null>(null)
const buttonText = ref('Copy Demo Code')

const copyDemoCode = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/CelestialSim/web-demo/main/demo.slang')
    const demoCode = await response.text()
    
    await navigator.clipboard.writeText(demoCode)
    
    if (copyDemoBtn.value) {
      buttonText.value = 'Code Copied! ✓'
      copyDemoBtn.value.style.backgroundColor = '#4caf50'
      
      setTimeout(() => {
        if (copyDemoBtn.value) {
          buttonText.value = 'Copy Demo Code'
          copyDemoBtn.value.style.backgroundColor = ''
        }
      }, 3000)
    }
  } catch (error) {
    console.error('Failed to copy code:', error)
    
    if (copyDemoBtn.value) {
      buttonText.value = 'Copy Failed - Try Again'
      copyDemoBtn.value.style.backgroundColor = '#f44336'
      
      setTimeout(() => {
        if (copyDemoBtn.value) {
          buttonText.value = 'Copy Demo Code'
          copyDemoBtn.value.style.backgroundColor = ''
        }
      }, 3000)
    }
  }
}
</script>
