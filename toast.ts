

let popupTimeout: number | null = null;

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
export function showToastMessage(text: string, timeout: number = 1000, backgroundColor: string = 'rgba(0, 0, 0, 0.8)', color: string = 'white') {

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
		popup?.classList.remove('active');
		setTimeout(() => {
			popup?.remove();
		}, 150);
		popupTimeout = null;
	}, 1000);
}