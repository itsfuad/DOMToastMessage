

let popupTimeout: number | null = null;
let id = '';

const styles = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 100px;
    left: 50%;
    padding: 10px;
    width: max-content;
    max-width: 98%;
    text-align: center;
    border-radius: 15px;
    font-size: 0.6rem;
    transform: translateX(-50%);
    backdrop-filter: blur(2px);
    z-index: 110;
    visibility: hidden;
    opacity: 0;
    transition: 100ms ease-in-out;
`;

function makeId(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Shows a popup message for 1 second
 * @param {string} text Text to show in the popup
 * @param {number} timeout Time in milliseconds to show the popup
 * @param {string} backgroundColor Background color of the popup
 * @param {string} color Text color of the popup
 */
export function showToastMessage(text: string, timeout: number = 1000, backgroundColor: string = 'rgba(0, 0, 0, 0.8)', color: string = 'white') {

	let popup = document.getElementById(id);

	if (!popup) {
		popup = document.createElement('div');
        if (popup instanceof HTMLElement) {
            popup.style.cssText = `
                ${styles}
                background-color: ${backgroundColor};
                color: ${color};
            `
            id = makeId(5);
            popup.classList.add(id);
            document.body.appendChild(popup);
        }
	}

    id = makeId(5);
    popup.id = id;
	popup.textContent = text;
	popup.style.visibility = 'visible';
    popup.style.opacity = '1';

	if (popupTimeout) {
		clearTimeout(popupTimeout);
	}

	popupTimeout = setTimeout(function () {
        if (!popup) return;
		setTimeout(() => {
			popup?.remove();
		}, 150);
		popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
		popupTimeout = null;
	}, timeout);
}