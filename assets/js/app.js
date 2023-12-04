document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("presentcta").addEventListener("click", () => {
    document.getElementById("presentation").style.display = "none";
    document.getElementById("filtroblue").style.display = "block";
    document.getElementById("cardmain").style.display = "flex";
    document.getElementById("footerjust").style.display = "flex";
  });

  const infoskin = document.getElementById("infoskin");
  const skinbtn = document.getElementById("skinbtn");
  const pacientemale27skin = document.getElementById("pacientemale27skin");
  infoskin.addEventListener("click", () => {
    pacientemale27skin.style.display = "block";
  });
  skinbtn.addEventListener("click", () => {
    pacientemale27skin.style.display = "none";
  });
  const infohead = document.getElementById("infohead");
  const headbtn = document.getElementById("headbtn");
  const pacientemale27head = document.getElementById("pacientemale27head");
  infohead.addEventListener("click", () => {
    pacientemale27head.style.display = "block";
  });
  headbtn.addEventListener("click", () => {
    pacientemale27head.style.display = "none";
  });

  const footerinfo = document.getElementById("footerinfo");
  const valoresbh = document.getElementById("valoresbh");
  const valoresbhbtn = document.getElementById("valoresbhbtn");
  footerinfo.addEventListener("click", () => {
    valoresbh.style.display = "flex";
  });
  valoresbhbtn.addEventListener("click", () => {
    valoresbh.style.display = "none";
  });

  const footerlabs = document.getElementById("footerlabs");
  const labs = document.getElementById("labs");
  const labsbtn = document.getElementById("labsbtn");
  footerlabs.addEventListener("click", () => {
    labs.style.display = "flex";
  })
  labsbtn.addEventListener("click", () => {
    labs.style.display = "none";
  })

  const footernext = document.getElementById("footernext");
  const cardtask1 = document.getElementById("cardtask1");
  const cardtask2 = document.getElementById("cardtask2");
  footernext.addEventListener("click", () => {
    cardtask1.style.display = "none";
    cardtask2.style.display = "flex";
    footernext.style.display = "none";
  });

  const ct2oe = document.querySelectorAll("#ct2oe");
  const enoti = document.getElementById("enoti");
  const ct2ebm = document.getElementById("ct2ebm");
  const ct2ow = document.getElementById("ct2ow");
  const wnoti = document.getElementById("wnoti");
  const ct2wbm = document.getElementById("ct2wbm");
  const cardtask3 = document.getElementById("cardtask3");
  for (const allct2oe of ct2oe) {
    allct2oe.addEventListener("click", function () {
      enoti.style.display = "flex";
    });
  }
  ct2ebm.addEventListener("click", () => {
    enoti.style.display = "none";
  });
  ct2ow.addEventListener("click", () => {
    wnoti.style.display = "flex";
  });
  ct2wbm.addEventListener("click", () => {
    cardtask2.style.display = "none";
    cardtask3.style.display = "flex";
  });

  const test3 = document.getElementById("test3");
  const test3btn = document.getElementById("test3btn");
  const enoti3 = document.getElementById("enoti3");
  const ct3ebm = document.getElementById("ct3ebm");
  const wnoti3 = document.getElementById("wnoti3");
  const ct3wbm = document.getElementById("ct3wbm");
  const cardtask4 = document.getElementById("cardtask4");
  test3.addEventListener("submit", (e) => {
    e.preventDefault();
    const rsp1 = document.getElementById("rsp1").checked;
    const rsp2 = document.getElementById("rsp2").checked;
    const rsp3 = document.getElementById("rsp3").checked;
    const rsp4 = document.getElementById("rsp4").checked;
    const rsp5 = document.getElementById("rsp5").checked;
    const rsp6 = document.getElementById("rsp6").checked;
    const rsp7 = document.getElementById("rsp7").checked;
    if (!rsp1 && rsp2 && rsp3 && !rsp4 && rsp5 && rsp6 && !rsp7) {
      test3btn.style.display = "none";
      wnoti3.style.display = "flex";
    } else {
      test3btn.style.display = "none";
      enoti3.style.display = "flex";
    }
    ct3wbm.addEventListener("click", () => {
      cardtask3.style.display = "none";
      cardtask4.style.display = "flex";
    });
    ct3ebm.addEventListener("click", () => {
      enoti3.style.display = "none";
      test3btn.style.display = "block";
    });
  });

  const ct4oe = document.querySelectorAll("#ct4oe");
  const enoti4 = document.getElementById("enoti4");
  const ct4ebm = document.getElementById("ct4ebm");
  const ct4ow = document.getElementById("ct4ow");
  const wnoti4 = document.getElementById("wnoti4");
  const ct4wbm = document.getElementById("ct4wbm");
  const cardtask5 = document.getElementById("cardtask5");
  for (const allct4oe of ct4oe) {
    allct4oe.addEventListener("click", function () {
      enoti4.style.display = "flex";
    });
  }
  ct4ebm.addEventListener("click", () => {
    enoti4.style.display = "none";
  });
  ct4ow.addEventListener("click", () => {
    wnoti4.style.display = "flex";
  });
  ct4wbm.addEventListener("click", () => {
    cardtask4.style.display = "none";
    cardtask5.style.display = "flex";
  });

  const ct5oe = document.querySelectorAll("#ct5oe");
  const enoti5 = document.getElementById("enoti5");
  const ct5ebm = document.getElementById("ct5ebm");
  const ct5ow = document.getElementById("ct5ow");
  const wnoti5 = document.getElementById("wnoti5");
  const ct5wbm = document.getElementById("ct5wbm");
  const cardtask6 = document.getElementById("cardtask6");
  for (const allct5oe of ct5oe) {
    allct5oe.addEventListener("click", function () {
      enoti5.style.display = "flex";
    });
  }
  ct5ebm.addEventListener("click", () => {
    enoti5.style.display = "none";
  });
  ct5ow.addEventListener("click", () => {
    wnoti5.style.display = "flex";
  });
  ct5wbm.addEventListener("click", () => {
    cardtask5.style.display = "none";
    cardtask6.style.display = "flex";
  });

  const ct6oe = document.querySelectorAll("#ct6oe");
  const enoti6 = document.getElementById("enoti6");
  const ct6ebm = document.getElementById("ct6ebm");
  const ct6ow = document.getElementById("ct6ow");
  const wnoti6 = document.getElementById("wnoti6");
  const ct6wbm = document.getElementById("ct6wbm");
  const cardtask7 = document.getElementById("cardtask7");
  for (const allct6oe of ct6oe) {
    allct6oe.addEventListener("click", function () {
      enoti6.style.display = "flex";
    });
  }
  ct6ebm.addEventListener("click", () => {
    enoti6.style.display = "none";
  });
  ct6ow.addEventListener("click", () => {
    wnoti6.style.display = "flex";
  });
  ct6wbm.addEventListener("click", () => {
    cardtask6.style.display = "none";
    cardtask7.style.display = "flex";
  });

  const test7 = document.getElementById("test7");
  const test7btn = document.getElementById("test7btn");
  const enoti7 = document.getElementById("enoti7");
  const ct7ebm = document.getElementById("ct7ebm");
  const wnoti7 = document.getElementById("wnoti7");
  const ct7wbm = document.getElementById("ct7wbm");
  const cardtask8 = document.getElementById("cardtask8");
  test7.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct7rsp1 = document.getElementById("ct7rsp1").checked;
    const ct7rsp2 = document.getElementById("ct7rsp2").checked;
    const ct7rsp3 = document.getElementById("ct7rsp3").checked;
    const ct7rsp4 = document.getElementById("ct7rsp4").checked;
    const ct7rsp5 = document.getElementById("ct7rsp5").checked;
    const ct7rsp6 = document.getElementById("ct7rsp6").checked;
    if (ct7rsp1 && ct7rsp2 && ct7rsp3 && ct7rsp4 && ct7rsp5 && ct7rsp6) {
      test7btn.style.display = "none";
      wnoti7.style.display = "flex";
    } else {
      test7btn.style.display = "none";
      enoti7.style.display = "flex";
    }
    ct7wbm.addEventListener("click", () => {
      cardtask7.style.display = "none";
      cardtask8.style.display = "flex";
    });
    ct7ebm.addEventListener("click", () => {
      enoti7.style.display = "none";
      test7btn.style.display = "block";
    });
  });

  const ct8oe = document.querySelectorAll("#ct8oe");
  const enoti8 = document.getElementById("enoti8");
  const ct8ebm = document.getElementById("ct8ebm");
  const ct8ow = document.getElementById("ct8ow");
  const wnoti8 = document.getElementById("wnoti8");
  const ct8wbm = document.getElementById("ct8wbm");
  const cardtask9 = document.getElementById("cardtask9");
  for (const allct8oe of ct8oe) {
    allct8oe.addEventListener("click", function () {
      enoti8.style.display = "flex";
    });
  }
  ct8ebm.addEventListener("click", () => {
    enoti8.style.display = "none";
  });
  ct8ow.addEventListener("click", () => {
    wnoti8.style.display = "flex";
  });
  ct8wbm.addEventListener("click", () => {
    cardtask8.style.display = "none";
    cardtask9.style.display = "flex";
  });

  const ct9oe = document.querySelectorAll("#ct9oe");
  const enoti9 = document.getElementById("enoti9");
  const ct9ebm = document.getElementById("ct9ebm");
  const ct9ow = document.getElementById("ct9ow");
  const wnoti9 = document.getElementById("wnoti9");
  const ct9wbm = document.getElementById("ct9wbm");
  const cardtask10 = document.getElementById("cardtask10");
  for (const allct9oe of ct9oe) {
    allct9oe.addEventListener("click", function () {
      enoti9.style.display = "flex";
    });
  }
  ct9ebm.addEventListener("click", () => {
    enoti9.style.display = "none";
  });
  ct9ow.addEventListener("click", () => {
    wnoti9.style.display = "flex";
  });
  ct9wbm.addEventListener("click", () => {
    cardtask9.style.display = "none";
    cardtask10.style.display = "flex";
  });

  const ct10oe = document.querySelectorAll("#ct10oe");
  const enoti10 = document.getElementById("enoti10");
  const ct10ebm = document.getElementById("ct10ebm");
  const ct10ow = document.getElementById("ct10ow");
  const wnoti10 = document.getElementById("wnoti10");
  const ct10wbm = document.getElementById("ct10wbm");
  const cardtask11 = document.getElementById("cardtask11");
  for (const allct10oe of ct10oe) {
    allct10oe.addEventListener("click", function () {
      enoti10.style.display = "flex";
    });
  }
  ct10ebm.addEventListener("click", () => {
    enoti10.style.display = "none";
  });
  ct10ow.addEventListener("click", () => {
    wnoti10.style.display = "flex";
  });
  ct10wbm.addEventListener("click", () => {
    cardtask10.style.display = "none";
    cardtask11.style.display = "flex";
  });

  const test11 = document.getElementById("test11");
  const test11btn = document.getElementById("test11btn");
  const enoti11 = document.getElementById("enoti11");
  const ct11ebm = document.getElementById("ct11ebm");
  const wnoti11 = document.getElementById("wnoti11");
  const ct11wbm = document.getElementById("ct11wbm");
  const cardtask12 = document.getElementById("cardtask12");
  test11.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct11rsp1 = document.getElementById("ct11rsp1").checked;
    const ct11rsp2 = document.getElementById("ct11rsp2").checked;
    const ct11rsp3 = document.getElementById("ct11rsp3").checked;
    const ct11rsp4 = document.getElementById("ct11rsp4").checked;
    const ct11rsp5 = document.getElementById("ct11rsp5").checked;
    const ct11rsp6 = document.getElementById("ct11rsp6").checked;
    const ct11rsp7 = document.getElementById("ct11rsp7").checked;
    const ct11rsp8 = document.getElementById("ct11rsp8").checked;
    const ct11rsp9 = document.getElementById("ct11rsp9").checked;
    const ct11rsp10 = document.getElementById("ct11rsp10").checked;
    const ct11rsp11 = document.getElementById("ct11rsp11").checked;
    if (
      ct11rsp1 &&
      !ct11rsp2 &&
      ct11rsp3 &&
      !ct11rsp4 &&
      ct11rsp5 &&
      !ct11rsp6 &&
      !ct11rsp7 &&
      ct11rsp8 &&
      !ct11rsp9 &&
      ct11rsp10 &&
      ct11rsp11
    ) {
      test11btn.style.display = "none";
      wnoti11.style.display = "flex";
    } else {
      test11btn.style.display = "none";
      enoti11.style.display = "flex";
    }
    ct11wbm.addEventListener("click", () => {
      cardtask11.style.display = "none";
      cardtask12.style.display = "flex";
    });
    ct11ebm.addEventListener("click", () => {
      enoti11.style.display = "none";
      test11btn.style.display = "block";
    });
  });

  const test12 = document.getElementById("test12");
  const test12btn = document.getElementById("test12btn");
  const enoti12 = document.getElementById("enoti12");
  const ct12ebm = document.getElementById("ct12ebm");
  const wnoti12 = document.getElementById("wnoti12");
  const ct12wbm = document.getElementById("ct12wbm");
  const cardtask13 = document.getElementById("cardtask13");
  test12.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct12rsp1 = document.getElementById("ct12rsp1").checked;
    const ct12rsp2 = document.getElementById("ct12rsp2").checked;
    const ct12rsp3 = document.getElementById("ct12rsp3").checked;
    const ct12rsp4 = document.getElementById("ct12rsp4").checked;
    const ct12rsp5 = document.getElementById("ct12rsp5").checked;
    const ct12rsp6 = document.getElementById("ct12rsp6").checked;
    const ct12rsp7 = document.getElementById("ct12rsp7").checked;
    if (
      ct12rsp1 &&
      ct12rsp2 &&
      ct12rsp3 &&
      ct12rsp4 &&
      ct12rsp5 &&
      ct12rsp6 &&
      ct12rsp7
    ) {
      test12btn.style.display = "none";
      wnoti12.style.display = "flex";
    } else {
      test12btn.style.display = "none";
      enoti12.style.display = "flex";
    }
    ct12wbm.addEventListener("click", () => {
      cardtask12.style.display = "none";
      cardtask13.style.display = "flex";
    });
    ct12ebm.addEventListener("click", () => {
      enoti12.style.display = "none";
      test12btn.style.display = "block";
    });
  });

  const test13 = document.getElementById("test13");
  const test13btn = document.getElementById("test13btn");
  const enoti13 = document.getElementById("enoti13");
  const ct13ebm = document.getElementById("ct13ebm");
  const wnoti13 = document.getElementById("wnoti13");
  const ct13wbm = document.getElementById("ct13wbm");
  const cardtask14 = document.getElementById("cardtask14");
  test13.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct13rsp1 = document.getElementById("ct13rsp1").checked;
    const ct13rsp2 = document.getElementById("ct13rsp2").checked;
    const ct13rsp3 = document.getElementById("ct13rsp3").checked;
    const ct13rsp4 = document.getElementById("ct13rsp4").checked;
    if (ct13rsp1 && !ct13rsp2 && ct13rsp3 && !ct13rsp4) {
      test13btn.style.display = "none";
      wnoti13.style.display = "flex";
    } else {
      test13btn.style.display = "none";
      enoti13.style.display = "flex";
    }
    ct13wbm.addEventListener("click", () => {
      cardtask13.style.display = "none";
      cardtask14.style.display = "flex";
    });
    ct13ebm.addEventListener("click", () => {
      enoti13.style.display = "none";
      test13btn.style.display = "block";
    });
  });

  const test14 = document.getElementById("test14");
  const test14btn = document.getElementById("test14btn");
  const enoti14 = document.getElementById("enoti14");
  const ct14ebm = document.getElementById("ct14ebm");
  const wnoti14 = document.getElementById("wnoti14");
  const ct14wbm = document.getElementById("ct14wbm");
  const cardtask15 = document.getElementById("cardtask15");
  test14.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct14rsp1 = document.getElementById("ct14rsp1").checked;
    const ct14rsp2 = document.getElementById("ct14rsp2").checked;
    const ct14rsp3 = document.getElementById("ct14rsp3").checked;
    const ct14rsp4 = document.getElementById("ct14rsp4").checked;
    const ct14rsp5 = document.getElementById("ct14rsp5").checked;
    if (!ct14rsp1 && ct14rsp2 && ct14rsp3 && !ct14rsp4 && ct14rsp5) {
      test14btn.style.display = "none";
      wnoti14.style.display = "flex";
    } else {
      test14btn.style.display = "none";
      enoti14.style.display = "flex";
    }
    ct14wbm.addEventListener("click", () => {
      cardtask14.style.display = "none";
      cardtask15.style.display = "flex";
    });
    ct14ebm.addEventListener("click", () => {
      enoti14.style.display = "none";
      test14btn.style.display = "block";
    });
  });

  const test15 = document.getElementById("test15");
  const test15btn = document.getElementById("test15btn");
  const enoti15 = document.getElementById("enoti15");
  const ct15ebm = document.getElementById("ct15ebm");
  const wnoti15 = document.getElementById("wnoti15");
  const ct15wbm = document.getElementById("ct15wbm");
  const cardtask16 = document.getElementById("cardtask16");
  test15.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct15rsp1 = document.getElementById("ct15rsp1").checked;
    const ct15rsp2 = document.getElementById("ct15rsp2").checked;
    const ct15rsp3 = document.getElementById("ct15rsp3").checked;
    const ct15rsp4 = document.getElementById("ct15rsp4").checked;
    const ct15rsp5 = document.getElementById("ct15rsp5").checked;
    const ct15rsp6 = document.getElementById("ct15rsp6").checked;
    if (
      !ct15rsp1 &&
      !ct15rsp2 &&
      ct15rsp3 &&
      !ct15rsp4 &&
      ct15rsp5 &&
      ct15rsp6
    ) {
      test15btn.style.display = "none";
      wnoti15.style.display = "flex";
    } else {
      test15btn.style.display = "none";
      enoti15.style.display = "flex";
    }
    ct15wbm.addEventListener("click", () => {
      cardtask15.style.display = "none";
      cardtask16.style.display = "flex";
    });
    ct15ebm.addEventListener("click", () => {
      enoti15.style.display = "none";
      test15btn.style.display = "block";
    });
  });

  const ct16oe = document.querySelectorAll("#ct16oe");
  const enoti16 = document.getElementById("enoti16");
  const ct16ebm = document.getElementById("ct16ebm");
  const ct16ow = document.getElementById("ct16ow");
  const wnoti16 = document.getElementById("wnoti16");
  const ct16wbm = document.getElementById("ct16wbm");
  const cardtask17 = document.getElementById("cardtask17");
  for (const allct16oe of ct16oe) {
    allct16oe.addEventListener("click", function () {
      enoti16.style.display = "flex";
    });
  }
  ct16ebm.addEventListener("click", () => {
    enoti16.style.display = "none";
  });
  ct16ow.addEventListener("click", () => {
    wnoti16.style.display = "flex";
  });
  ct16wbm.addEventListener("click", () => {
    cardtask16.style.display = "none";
    cardtask17.style.display = "flex";
  });

  const test17 = document.getElementById("test17");
  const test17btn = document.getElementById("test17btn");
  const enoti17 = document.getElementById("enoti17");
  const ct17ebm = document.getElementById("ct17ebm");
  const wnoti17 = document.getElementById("wnoti17");
  const ct17wbm = document.getElementById("ct17wbm");
  const cardtask18 = document.getElementById("cardtask18");
  test17.addEventListener("submit", (e) => {
    e.preventDefault();
    const ct17rsp1 = document.getElementById("ct17rsp1").checked;
    const ct17rsp2 = document.getElementById("ct17rsp2").checked;
    const ct17rsp3 = document.getElementById("ct17rsp3").checked;
    const ct17rsp4 = document.getElementById("ct17rsp4").checked;
    const ct17rsp5 = document.getElementById("ct17rsp5").checked;
    if (ct17rsp1 && ct17rsp2 && !ct17rsp3 && ct17rsp4 && !ct17rsp5) {
      test17btn.style.display = "none";
      wnoti17.style.display = "flex";
    } else {
      test17btn.style.display = "none";
      enoti17.style.display = "flex";
    }
    ct17wbm.addEventListener("click", () => {
      cardtask17.style.display = "none";
      cardtask18.style.display = "flex";
    });
    ct17ebm.addEventListener("click", () => {
      enoti17.style.display = "none";
      test17btn.style.display = "block";
    });
  });

  const ct18oe = document.querySelectorAll("#ct18oe");
  const enoti18 = document.getElementById("enoti18");
  const ct18ebm = document.getElementById("ct18ebm");
  const ct18ow = document.getElementById("ct18ow");
  const wnoti18 = document.getElementById("wnoti18");
  const ct18wbm = document.getElementById("ct18wbm");
  for (const allct18oe of ct18oe) {
    allct18oe.addEventListener("click", function () {
      enoti18.style.display = "flex";
    });
  }
  ct18ebm.addEventListener("click", () => {
    enoti18.style.display = "none";
  });
  ct18ow.addEventListener("click", () => {
    wnoti18.style.display = "flex";
  });
  ct18wbm.addEventListener("click", () => {
    // Aquí va tu lógica para el botón ct18wbm
  });
});
