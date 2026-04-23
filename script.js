const installEl = document.getElementById("installCommand");
const buttons = [document.getElementById("copyInstallTop"), document.getElementById("copyInstallInline")].filter(Boolean);

async function copyInstall() {
  const text = installEl ? installEl.textContent.trim() : "pip install modelc";
  try {
    await navigator.clipboard.writeText(text);
    buttons.forEach((btn) => {
      const original = btn.dataset.original || btn.textContent;
      btn.dataset.original = original;
      btn.textContent = "Copied";
      setTimeout(() => { btn.textContent = original; }, 1400);
    });
  } catch (e) {
    buttons.forEach((btn) => {
      const original = btn.dataset.original || btn.textContent;
      btn.dataset.original = original;
      btn.textContent = "Failed";
      setTimeout(() => { btn.textContent = original; }, 1400);
    });
  }
}
buttons.forEach((btn) => btn.addEventListener("click", copyInstall));
