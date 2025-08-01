<template>
  <section id="demo" class="section">
    <div class="container">
      <h2 class="section-title">Interactive Demo</h2>
      <div class="demo-container">
        <div class="demo-placeholder">
          <h3>Try CelestialSim Now</h3>
          <p>Experience core terrain generation directly in your browser using Slang Playground.
            <br><em>Note: Full AI features and complex simulations coming in the Godot version.</em>
          </p>

          <div class="browser-compatibility">
            <p><strong>🌐 Browser Requirements:</strong> This demo requires a Chromium-based browser
              such as Chrome, Edge, Opera, or Brave.</p>
          </div>

          <div class="demo-instructions">
            <h4>How to Run:</h4>
            <ol>
              <li>
                <div class="instruction-with-button">
                  <span>Click the Copy Demo Code button or copy the code manually from <a
                      href="https://github.com/CelestialSim/web-demo/blob/main/demo.slang"
                      target="_blank" rel="noopener noreferrer">GitHub</a></span>
                  <CopyButton />
                </div>
              </li>
              <li>
                <div class="instruction-with-button">
                  <span>Open Slang Playground in your browser</span>
                  <a href="https://shader-slang.org/slang-playground/?target=SPIRV&code=eJztVktrFEEQvu-vqMRDDm4y-DgNSCAb8oCIIRvMuWemdqbZnqmhu2fX9eRVNBpjHhAMiyAoehTE37N_wPwEq6dnQ8SYY3KIQy-701X11aPrq94ggMnhweRw79as41bgcn4Hlzxn49dj2EEVU45gCTqo0FgpVFfmvB_BMuY049X-fhjUY5_cdI7XuU5bLumz8ckL2EKRjFzd8FmpSHMJM4SYTE5mEVZIKRq6LYNgZF4q_rJYmrABeL8LXX6HeyE8lUZaoErDECP-iV7j4BhWifFDyKxlwyCIpwfEgAuptFkVLUgKFjOZZoo_9lFM5WjJFncSPrmpo1fe0f0QOiyto3RiDjVpPO1_hA2iPvRI1-LZWtGdPpskOAtRZS0VIIoEYiXjPkg7M4U_9fAPQtgUnCGLQNgaJiK2yusm-fClkfoaJfinDlCP36ThAvhuzNEYkWLtY3L049fPt97LwxDWpLfcqoomLh_Im5ewI2ycwchV8rxUrviVElZy_NNGV7KHPv6bbqdrXS7hK5-z8dc9WEFhK40m_JfWrawbD8FdWC8sahFbOUAolSjQQooFb9Xd5dhxodlKGqLGBKIRdFk3bUi9C49d-6-HsPFkGbojJkUO87DJFTcwtz53YaC0oeLhcTeYd3vPiWlSu0DHXyukAoUDVKbh8OcGmJGZB6hhU4kYcywsw3dq1jYxM5pIEhg6rTbUMXp-s0Az6Tm7Wtbk_X0KzMjbmr13SzEsZJGe47Jd6Zxx4KKedJbV2kBMU23AOHWQhSuOVIJHDGotZEPbT0cMz8Oz17SdA4vQBchxsZGj-iolZGHAYFzY_7y9hLf732BN8Ln1qmLmat1bS2KX8bb2F3bS3CH-JmJSlWT8jom5dQuTEVkD5NsvkSYm7ZinB54V0wu5kSykaRD1OvFO39itpfrfAd94rdZvdldbVw"
                      target="_blank" rel="noopener noreferrer" class="btn btn-accent inline-btn">
                    🚀 Open Slang Playground
                  </a>
                </div>
              </li>
              <li>Replace the code in the playground</li>
              <li>Run and interact with the simulation!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CopyButton from '../ui/CopyButton.vue'
</script>
