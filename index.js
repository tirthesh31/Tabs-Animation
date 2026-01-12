// Stagger animation for Webflow Tabs (attribute-based)
$(document).ready(function () {

  function animateTabItems($panel) {
    const $items = $panel.children('[fh-tab-item]');

    // Reset state
    gsap.set($items, {
      opacity: 0,
      y: 24
    });

    // Animate bottom → top with stagger
    gsap.to($items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12
    });
  }

  // Listen for Webflow tab clicks
  $('[fh-tab-link]').on('click', function () {
    const targetTab = $(this).attr('data-w-tab');
    const $panel = $(
      `.w-tab-pane[data-w-tab="${targetTab}"] [fh-tab-panel]`
    );

    if ($panel.length) {
      setTimeout(() => {
        animateTabItems($panel);
      }, 50);
    }
  });

  // Animate first active tab on page load
  const $firstPanel = $('.w-tab-pane.w--tab-active [fh-tab-panel]');
  if ($firstPanel.length) {
    animateTabItems($firstPanel);
  }

});