const data = [
    { title: "10K pageviews", price: 8 },
    { title: "50K pageviews", price: 12 },
    { title: "100K pageviews", price: 16 },
    { title: "500K pageviews", price: 24 },
    { title: "1M pageviews", price: 36 },
];
let isYearly = false;

const titleEl = document.querySelector(".card-title");
const priceEl = document.querySelector(".price");
const changePriceHandler = ({ title, price }) => {
    titleEl.textContent = title;
    priceEl.textContent = `$${isYearly ? price * 0.75 : price}.00`;
};

const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');
const togglerEl = document.querySelector(".toggle-component");

function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
        target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";

    changePriceHandler(data[val]);
}

rangeInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
});

togglerEl.addEventListener("click", (e) => {
    const toggleCircle = e.target.parentElement.querySelector(".toggle-circle");
    const price = +priceEl.textContent.replace(/^\D+/g, "");
    let currentPrice;

    if (toggleCircle.classList.contains("choose-yearly")) {
        toggleCircle.classList.remove("choose-yearly");
        currentPrice = price / 0.75;
    } else {
        toggleCircle.classList.add("choose-yearly");
        currentPrice = price * 0.75;
    }
    priceEl.textContent = `$${currentPrice}.00`;
    isYearly = !isYearly;
});
