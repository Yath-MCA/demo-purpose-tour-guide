import Tour from 'bootstrap-tour';

const initTour = () => {
  const tour = new Tour({
    orphan: false,
    backdrop: true,
    smartPlacement: true,
    debug: true,
    steps: [
      {
        element: "#normalActionBtn",
        title: "Step 1",
        content: "Highlight normalActionBtn.",
        onShow: () => console.log("Tour step started")
      },
      {
        element: "#profileBtn",
        title: "Step 2",
        content: "Highlight profileBtn.",
        onShow: () => console.log("Tour step started")
      },
      {
        element: "#logoutBtn",
        title: "Step 3",
        content: "Highlight logoutBtn.",
        onShow: () => {
          console.log("Tour step started");
          const profileDropdown = document.getElementById("profileDropdown");
          const btn = document.getElementById("profileBtn");
          if (!profileDropdown || !profileDropdown.classList.contains("show")) {
            if (btn) btn.click();
          }
          return new Promise(resolve => {
            const check = setInterval(() => {
              if (document.getElementById("logoutBtn")) {
                clearInterval(check);
                resolve();
              }
            }, 100);
          });
        }
      },
      {
        element: "#openPanelBtn",
        title: "Step 4",
        content: "Highlight openPanelBtn.",
        onShow: () => console.log("Tour step started")
      },
      {
        element: "#slidePanel",
        title: "Step 5",
        content: "Highlight slidePanel after clicking openPanelBtn.",
        onShow: () => {
          console.log("Tour step started");
          const slidePanel = document.getElementById("slidePanel");
          if (slidePanel && !slidePanel.classList.contains("open")) {
            const btn = document.getElementById("openPanelBtn");
            if (btn) btn.click();
          }
          return new Promise(resolve => {
            const check = setInterval(() => {
              const panel = document.getElementById("slidePanel");
              if (panel && panel.classList.contains("open")) {
                setTimeout(resolve, 300); // Wait for transition
                clearInterval(check);
              }
            }, 100);
          });
        }
      }
    ]
  });

  // clear any old tour state
  localStorage.removeItem("tour_current_step");
  localStorage.removeItem("tour_end");

  tour.init();
  tour.start(true); // true to force start from step 1
};

export default initTour;
