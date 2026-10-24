// Giai đoạn 1: chỉ xử lý thông báo cho các chức năng chưa triển khai
// và ảnh dự phòng khi ảnh sản phẩm không tải được.
"use strict";

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message; // dùng textContent, không dùng innerHTML
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// Click vào nút có thuộc tính data-pending
document.addEventListener("click", (event) => {
  const el = event.target.closest("button[data-pending]");
  if (el) showToast(`${el.dataset.pending}: chưa triển khai.`);
});

// Gửi form tìm kiếm (form có data-pending)
document.querySelectorAll("form[data-pending]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast(`${form.dataset.pending}: chưa triển khai.`);
  });
});

// Ảnh lỗi -> thay bằng ảnh dự phòng
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    if (!img.src.endsWith("placeholder.svg")) {
      img.src = "assets/images/placeholder.svg";
    }
  });
});
