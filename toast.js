"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showToastMessage = void 0;
let popupTimeout = null;
const styles = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 100px;
    left: 50%;
    background: #000000bb;
    padding: 10px;
    border-radius: 15px;
    font-size: 0.6rem;
    transform: translateX(-50%);
    backdrop-filter: blur(2px);
    z-index: 110;
    visibility: hidden;
    opacity: 0;
    transition: 100ms ease-in-out;
`;
/**
 * Shows a popup message for 1 second
 * @param {string} text Text to show in the popup
 * @param {number} timeout Time in milliseconds to show the popup
 * @param {string} backgroundColor Background color of the popup
 * @param {string} color Text color of the popup
 */
function showToastMessage(text, timeout = 1000, backgroundColor = 'rgba(0, 0, 0, 0.8)', color = 'white') {
    let popup = document.querySelector('.popup-message');
    if (!popup) {
        popup = document.createElement('div');
        if (popup instanceof HTMLElement) {
            popup.style.cssText = styles;
            popup.style.backgroundColor = backgroundColor;
            popup.style.color = color;
            popup.classList.add('popup-message');
            document.body.appendChild(popup);
        }
    }
    popup.textContent = text;
    popup.classList.add('active');
    if (popupTimeout) {
        clearTimeout(popupTimeout);
    }
    popupTimeout = setTimeout(function () {
        popup === null || popup === void 0 ? void 0 : popup.classList.remove('active');
        setTimeout(() => {
            popup === null || popup === void 0 ? void 0 : popup.remove();
        }, 150);
        popupTimeout = null;
    }, 1000);
}
exports.showToastMessage = showToastMessage;
