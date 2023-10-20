const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const prices = ["$30", "$50", "$70"];

const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: "$30"
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: "$50"
    }
];

const table = document.querySelector("#freelancers");
const average = document.querySelector("#average");

render();
const createFreelancer = setInterval(addFreelancer, 1000);

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({ name: name, occupation: occupation, price: price});
    render();
    if (freelancers.length >= 20) {
        clearInterval(createFreelancer);
    }
}

function render() {
    const freelancerElements = freelancers.map((freelancer) => {
        return createEntry(freelancer.name, freelancer.occupation, freelancer.price);
    });
    table.replaceChildren(...freelancerElements);
    updateAverage();
}

function createEntry(name, occ, price) {
    const row = document.createElement("tr");
    const n = document.createElement("td");
    const o = document.createElement("td");
    const p = document.createElement("td");
    n.textContent = name;
    o.textContent = occ;
    p.textContent = price;
    p.className = "price";

    row.append(n);
    row.append(o);
    row.append(p);
    return row;
}

function updateAverage() {
    const priceElements = document.querySelectorAll(".price");
    let sum = 0;
    priceElements.forEach(x => sum += parseInt(x.textContent.substring(1)));
    const ave = sum / priceElements.length;
    average.textContent = `The average starting price is $${ave.toFixed(2)}`;
}
