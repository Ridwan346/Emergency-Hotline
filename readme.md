getElementById()

নির্দিষ্ট id এর এলিমেন্ট খুঁজে আনে ,শুধু একটি এলিমেন্ট রিটার্ন করে

getElementsByClassName()

নির্দিষ্ট class name এর সব এলিমেন্ট খুঁজে আনে ,HTMLCollection রিটার্ন করে

querySelector()

CSS selector ব্যবহার করে প্রথম ম্যাচ হওয়া এলিমেন্ট রিটার্ন করে

querySelectorAll()

সব ম্যাচ হওয়া এলিমেন্ট রিটার্ন করে

DOM এ Insert করার নিয়ম
const h2 = document.createElement("h2");

ভেতরে টেক্সট যোগ করো
h2.textContent = "Hello World!";

DOM এ যোগ করো
document.body.appendChild(h2);

Event Bubbling মানে হলো:
একটি child element এ event ট্রিগার হলে সেটা ধীরে ধীরে তার parent → grand parent → document পর্যন্ত ছড়িয়ে যায়।

Event Delegation মানে
parent element এ একটি event listener বসানো, যাতে তার child এলিমেন্টগুলোর event গুলোও handle করা যায়।

preventDefault() বনাম stopPropagation()
কোনো element এর default action বন্ধ করে
event এর bubbling বা capturing থামিয়ে দেয়