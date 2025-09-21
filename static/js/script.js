document.addEventListener('DOMContentLoaded', function() {
    // --- 模擬感測器數據更新 ---
    const tempElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');

    setInterval(() => {
        // 產生 18.0 到 28.0 之間的隨機溫度
        const fakeTemp = (Math.random() * 10 + 18).toFixed(1);
        // 產生 40 到 60 之間的隨機濕度
        const fakeHumidity = (Math.random() * 20 + 40).toFixed(0);

        tempElement.textContent = `${fakeTemp} °C`;
        humidityElement.textContent = `${fakeHumidity} %`;
    }, 2000); // 每 2 秒更新一次

    // --- 燈光控制 ---
    const lightToggleButton = document.getElementById('light-toggle');
    const lightStatusElement = document.getElementById('light-status');
    const lightCardElement = document.getElementById('light-card');
    let isLightOn = false;

    lightToggleButton.addEventListener('click', () => {
        isLightOn = !isLightOn; // 切換狀態

        if (isLightOn) {
            lightStatusElement.textContent = '開啟';
            lightToggleButton.textContent = '關閉';
            lightToggleButton.style.backgroundColor = '#f44336'; // Red for off
            lightCardElement.classList.add('light-on');
        } else {
            lightStatusElement.textContent = '關閉';
            lightToggleButton.textContent = '開啟';
            lightToggleButton.style.backgroundColor = '#4CAF50'; // Green for on
            lightCardElement.classList.remove('light-on');
        }
    });
});
