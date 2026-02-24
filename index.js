const totalEl = document.getElementById("total");
const interviewEl = document.getElementById("interviewCount");
const rejectedEl = document.getElementById("rejectedCount");
const jobTotalEl = document.getElementById("jobTotal");
const jobVisibleEl = document.getElementById("jobVisible");
const noJobsEl = document.getElementById("noJobs");

let jobCards = document.querySelectorAll(".job-card");


function updateCount() {
  jobCards = document.querySelectorAll(".job-card");

  let total = 0, interview = 0, rejected = 0, visible = 0;

  jobCards.forEach(card => {
    total++;

    if (card.dataset.status === "interview") interview++;
    if (card.dataset.status === "rejected") rejected++;
    if (card.style.display !== "none") visible++;
  });


  totalEl.innerText = total;
  interviewEl.innerText = interview;
  rejectedEl.innerText = rejected;


  jobVisibleEl.innerText = visible;
  jobTotalEl.innerText = total;

  noJobsEl.classList.toggle("hidden", visible > 0);
}


document.querySelectorAll(".filterBtn").forEach(btn => {
  btn.onclick = () => {
    const target = btn.dataset.target;

    jobCards.forEach(card => {
      card.style.display =
        target === "all" || card.dataset.status === target ? "flex" : "none";
    });

    updateCount();
  };
});


jobCards.forEach(card => {

  card.querySelector(".btn-interview").onclick = () => {
    card.dataset.status = "interview";
    updateCount();
  };

  card.querySelector(".btn-reject").onclick = () => {
    card.dataset.status = "rejected";
    updateCount();
  };

  card.querySelector(".btn-delete").onclick = () => {
    card.remove();
    updateCount();
  };
});

updateCount();