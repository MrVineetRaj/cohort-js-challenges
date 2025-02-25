let feedbacks = [
  {
    feedbackType: "bug",
    name: "Alex Carter",
    rating: 4,
    thoughts:
      "Encountered a login issue where the page refreshes endlessly. Please check.",
  },
  {
    feedbackType: "feedback",
    name: "Priya Singh",
    rating: 5,
    thoughts: "Love the intuitive UI and smooth performance! Great job!",
  },
  {
    feedbackType: "bug",
    name: "John Doe",
    rating: 2,
    thoughts: "The dashboard takes too long to load, especially on mobile.",
  },
  {
    feedbackType: "feedback",
    name: "Emily Wang",
    rating: 5,
    thoughts:
      "Excellent customer support! The live chat feature is super responsive.",
  },
  {
    feedbackType: "bug",
    name: "Rahul Verma",
    rating: 3,
    thoughts:
      "The invoice generation tool sometimes fails to process payments correctly.",
  },
  {
    feedbackType: "feedback",
    name: "Samantha Green",
    rating: 4,
    thoughts:
      "The new analytics dashboard is insightful, but could use more filtering options.",
  },
  {
    feedbackType: "bug",
    name: "Michael Lee",
    rating: 1,
    thoughts: "App crashes when trying to export reports in CSV format.",
  },
  {
    feedbackType: "feedback",
    name: "Olivia Brown",
    rating: 5,
    thoughts:
      "Smooth onboarding process! Helped me set up my account in minutes.",
  },
  {
    feedbackType: "bug",
    name: "David Miller",
    rating: 2,
    thoughts: "Notification settings are not saving properly after updates.",
  },
  {
    feedbackType: "feedback",
    name: "Sophia Rodriguez",
    rating: 4,
    thoughts:
      "Collaboration features are great, but I wish there was a dark mode option.",
  },
];
let starsGivenForNewFeedBack = 0;
const feedbacksList = document.getElementById("feedbacks");

const formateDate = (currDate) => {
  let date = new Date(currDate);
  let tempDate = date.toLocaleDateString();
  let timeHour = date.getHours().toString().padStart(2, "0");
  let timeMinute = date.getMinutes().toString().padStart(2, "0");

  return `${tempDate}, ${timeHour}:${timeMinute}`;
};

const loadFeedback = () => {
  feedbacksList.innerHTML = null;
  feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.forEach((feedback, index) => {
    let newFeedbackListItem = document.createElement("li");
    if (feedback.feedbackType === "bug") {
      newFeedbackListItem.style.background = "#fff2f2";
    }
    newFeedbackListItem.innerHTML = ` <span >
                                  <div class="avatar">${feedback.name[0]}</div>
                                  <span>
                                    <p class="user-name">${feedback.name}</p>
                                    <p class="timestamp">${formateDate(
                                      feedback.timestamp
                                    )}</p>
                                    <p class="rating">

                                    </p>
                                    </span>
                                  </span>
                                <p class="user-thoughts">${
                                  feedback.thoughts
                                }</p>`;
    feedbacksList.appendChild(newFeedbackListItem);
  });

  document.querySelectorAll(".rating").forEach((rating, idx) => {
    let feedback = feedbacks[idx];
    switch (feedback.rating) {
      case 5:
        rating.innerHTML = "&#11088; &#11088; &#11088; &#11088; &#11088; ";
        break;
      case 4:
        rating.innerHTML = "&#11088; &#11088; &#11088; &#11088; ";
        break;
      case 3:
        rating.innerHTML = "&#11088; &#11088; &#11088; ";
        break;
      case 2:
        rating.innerHTML = "&#11088; &#11088; ";
        break;
      case 1:
        rating.innerHTML = "&#11088; ";
        break;
    }
  });
};

const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    console.log(index);
    stars.forEach((star) => {
      star.innerHTML = "&star;";
    });
    for (let i = 0; i <= index; i++) {
      stars[i].innerHTML = `&#11088;`;
    }
    starsGivenForNewFeedBack = index + 1;
  });
});

const feedbackForm = document.querySelector(".feedback-form");

// console.log(feedbackForm);
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(feedbackForm.target);
  if (
    !feedbackForm[0].value ||
    !feedbackForm[1].value ||
    starsGivenForNewFeedBack === 0 ||
    !feedbackForm[2].value
  ) {
    alert("Fill all fields!");
    return;
  }
  const currTime = new Date().getTime();
  let newFeedBack = {
    feedbackType: feedbackForm[0].value,
    name: feedbackForm[1].value,
    rating: starsGivenForNewFeedBack,
    thoughts: feedbackForm[2].value,
    timestamp: currTime,
  };

  let pastFeedBacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

  pastFeedBacks.unshift(newFeedBack);

  localStorage.setItem("feedbacks", JSON.stringify(pastFeedBacks));
  loadFeedback();
});

loadFeedback();
