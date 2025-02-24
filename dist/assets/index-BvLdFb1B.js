(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) d(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && d(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function d(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = c(e);
    fetch(e.href, t);
  }
})();
const m = document.getElementById("menu_btn"),
  p = document.getElementById("menu_items");
m.onclick = () => {
  p.classList.toggle("active");
};
const i = document.getElementById("email_placeholder"),
  o = document.getElementById("email_input"),
  a = document.getElementById("pass_placeholder"),
  l = document.getElementById("pass_input");
o.onfocus = () => {
  i.classList.add("email_pass_placeholder_style");
};
o.onblur = () => {
  i.classList.remove("email_pass_placeholder_style"),
    o && o.value && i.classList.add("email_pass_placeholder_style");
};
l.onfocus = () => {
  a.classList.add("email_pass_placeholder_style");
};
l.onblur = () => {
  a.classList.remove("email_pass_placeholder_style"),
    l && l.value && a.classList.add("email_pass_placeholder_style");
};
const u = document.getElementById("input_checkbox");
u.onclick = () => {
  u.checked
    ? (console.log("Checked"), (l.type = "text"))
    : (console.log("nog checked"), (l.type = "password"));
};
const _ = document.getElementById("submit_btn");
_.onclick = () => {
  console.log(o.value, l.value);
  let r = o.value,
    s = l.value,
    c = r.replace(/\s/g, "");
  console.log(c),
    c === "abc@hello.com" && s === "123"
      ? (window.location = "/homepage.html")
      : console.log("Log in failed");
};
const f = document.getElementById("copy_btn");
f.onclick = () => {
  (o.value = "abc@hello.com"),
    o.focus(),
    o.select(),
    navigator.clipboard.writeText("Noman");
};
document.body.innerHTML;
document.body.onload = () => {
  console.log("Page on load"), (o.value = ""), (l.value = "");
};
