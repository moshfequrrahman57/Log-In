(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) m(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const c of t.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && m(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
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
  function m(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
const p = document.getElementById("menu_btn"),
  _ = document.getElementById("menu_items");
p.onclick = () => {
  _.classList.toggle("active");
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
    : (console.log("not checked"), (l.type = "password"));
};
const y = document.getElementById("submit_btn"),
  d = document.getElementById("failed_mess");
d.style.display = "none";
y.onclick = () => {
  console.log(o.value, l.value);
  let r = o.value,
    s = l.value,
    n = r.replace(/\s/g, "");
  console.log(n),
    n === "abc@hello.com" && s === "123"
      ? ((d.style.display = "none"), (window.location = "/homepage.html"))
      : (console.log("Log in failed"), (d.style.display = "flex"));
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
