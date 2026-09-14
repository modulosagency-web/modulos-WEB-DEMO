/* ============================================================
   CINEMATIC INTRO
   ============================================================ */
(function initCinematicIntro() {
  const intro = document.getElementById('cinematicIntro');
  if (!intro) return;

  document.body.style.overflow = 'hidden';

  const hideIntro = () => {
    intro.classList.add('hide');
    document.body.style.overflow = '';
    setTimeout(() => { if (intro.parentNode) intro.remove(); }, 1400);
  };

  const skipBtn = document.getElementById('introSkip');
  if (skipBtn) skipBtn.addEventListener('click', hideIntro);

  const timer = setTimeout(hideIntro, 6500);

  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      clearTimeout(timer);
      hideIntro();
      document.removeEventListener('keydown', escHandler);
    }
  });

  if (sessionStorage.getItem('ga_intro_shown') === '1') {
    clearTimeout(timer);
    setTimeout(hideIntro, 500);
  } else {
    sessionStorage.setItem('ga_intro_shown', '1');
  }
})();

/* ============ ROOMS DATABASE ============ */
const ROOMS_DB = [
  {
    id: "deluxe-king-ac",
    name: "Deluxe King Room",
    type: "ac",
    bedType: "king",
    price: 289,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "45 m²" },
      { icon: "fa-bed", text: "King bed" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-city", text: "City view" }
    ],
    desc: "Elegant AC room with plush king bed, marble bathroom, and private balcony overlooking the skyline.",
    rating: "4.9",
    reviews: 128,
    category: "room"
  },
  {
    id: "executive-suite-ac",
    name: "Executive Suite",
    type: "ac",
    bedType: "king",
    price: 459,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "78 m²" },
      { icon: "fa-bed", text: "King + Sofa" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-water", text: "Ocean view" }
    ],
    desc: "Spacious AC suite with separate living area, walk-in closet, and luxurious bathroom with gold fixtures.",
    rating: "5.0",
    reviews: 94,
    category: "suite"
  },
  {
    id: "royal-villa-ac",
    name: "Royal Villa",
    type: "ac",
    bedType: "king",
    price: 799,
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "120 m²" },
      { icon: "fa-bed", text: "2 King beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-swimmer", text: "Private pool" }
    ],
    desc: "Ultimate privacy with private infinity pool, personal butler, and terrace with panoramic sea views.",
    rating: "5.0",
    reviews: 67,
    category: "suite"
  },
  {
    id: "premier-twin-ac",
    name: "Premier Twin Room",
    type: "ac",
    bedType: "twin",
    price: 249,
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "40 m²" },
      { icon: "fa-bed", text: "2 Twin beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-tree", text: "Garden view" }
    ],
    desc: "Ideal for friends or colleagues, with two comfortable twin beds and a cozy seating area.",
    rating: "4.8",
    reviews: 203,
    category: "room"
  },
  {
    id: "junior-suite-nonac",
    name: "Junior Suite (Non-AC)",
    type: "non-ac",
    bedType: "king",
    price: 199,
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "62 m²" },
      { icon: "fa-bed", text: "King bed" },
      { icon: "fa-fan", text: "Non-AC" },
      { icon: "fa-couch", text: "Living area" }
    ],
    desc: "A refined non-AC suite with separate lounge, premium amenities, and elegant gold-toned décor.",
    rating: "4.7",
    reviews: 112,
    category: "suite"
  },
  {
    id: "standard-double-nonac",
    name: "Standard Double Room",
    type: "non-ac",
    bedType: "double",
    price: 129,
    img: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "28 m²" },
      { icon: "fa-bed", text: "Double bed" },
      { icon: "fa-fan", text: "Non-AC" },
      { icon: "fa-wifi", text: "Free WiFi" }
    ],
    desc: "Comfortable non-AC room with a double bed, perfect for budget-conscious travellers.",
    rating: "4.5",
    reviews: 340,
    category: "room"
  },
  {
    id: "presidential-suite-ac",
    name: "Presidential Suite",
    type: "ac",
    bedType: "king",
    price: 1299,
    img: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "200 m²" },
      { icon: "fa-bed", text: "3 King beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-concierge-bell", text: "24/7 Butler" }
    ],
    desc: "The pinnacle of luxury: private elevator, dining for 8, and wrap-around terrace with Jacuzzi.",
    rating: "5.0",
    reviews: 41,
    category: "suite"
  },
  {
    id: "family-room-ac",
    name: "Family Room",
    type: "ac",
    bedType: "double",
    price: 349,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "55 m²" },
      { icon: "fa-bed", text: "2 Double beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-child", text: "Kids friendly" }
    ],
    desc: "Spacious AC family room with two double beds, perfect for families with children.",
    rating: "4.8",
    reviews: 156,
    category: "room"
  },
  {
    id: "economy-single-nonac",
    name: "Economy Single Room",
    type: "non-ac",
    bedType: "single",
    price: 79,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "18 m²" },
      { icon: "fa-bed", text: "Single bed" },
      { icon: "fa-fan", text: "Non-AC" },
      { icon: "fa-wifi", text: "Free WiFi" }
    ],
    desc: "Compact non-AC single room ideal for solo business travellers on a budget.",
    rating: "4.3",
    reviews: 421,
    category: "room"
  }
];

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ============ BOOKING MODAL ============ */
let currentRoom = null;

function openBookingModal(roomIdOrTitle) {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  document.getElementById('modalFormView').style.display = 'block';
  document.getElementById('modalSuccessView').style.display = 'none';
  document.getElementById('modalTitle').textContent = 'Book Your Stay';

  let room = null;
  if (roomIdOrTitle) {
    room = ROOMS_DB.find(r => r.id === roomIdOrTitle || r.name === roomIdOrTitle);
  }
  if (!room) room = ROOMS_DB[0];
  currentRoom = room;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const fmt = (d) => d.toISOString().split('T')[0];

  document.getElementById('modalCheckin').value = fmt(tomorrow);
  document.getElementById('modalCheckout').value = fmt(dayAfter);
  document.getElementById('modalCheckin').min = fmt(today);
  document.getElementById('modalCheckout').min = fmt(tomorrow);

  document.getElementById('modalRoom').value = room.id;

  const savedUser = JSON.parse(localStorage.getItem('ga_user') || '{}');
  if (savedUser.name) document.getElementById('modalName').value = savedUser.name;
  if (savedUser.email) document.getElementById('modalEmail').value = savedUser.email;
  if (savedUser.phone) document.getElementById('modalPhone').value = savedUser.phone;

  updatePriceSummary();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ============ PRICE CALCULATION ============ */
function updatePriceSummary() {
  const roomSelect = document.getElementById('modalRoom');
  const checkin = document.getElementById('modalCheckin').value;
  const checkout = document.getElementById('modalCheckout').value;
  const guests = document.getElementById('modalGuests').value;

  if (!roomSelect || !checkin || !checkout) return;

  const room = ROOMS_DB.find(r => r.id === roomSelect.value);
  if (!room) return;

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  let nights = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
  if (nights < 1 || isNaN(nights)) nights = 1;

  let guestCount = parseInt(guests);
  if (isNaN(guestCount)) guestCount = 1;
  let extraGuestFee = 0;
  if (guestCount > 2) extraGuestFee = (guestCount - 2) * 30;

  const subtotal = (room.price * nights) + (extraGuestFee * nights);
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const summary = document.getElementById('priceSummary');
  if (summary) {
    summary.innerHTML = `
      <div>
        <div style="font-size:0.85rem;color:var(--text-muted);">${room.name} × ${nights} night${nights > 1 ? 's' : ''}</div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">Taxes & fees (12%)</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.95rem;">$${subtotal.toLocaleString()}</div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">$${taxes.toLocaleString()}</div>
      </div>
    `;
  }

  const totalEl = document.getElementById('totalPrice');
  if (totalEl) totalEl.textContent = '$' + total.toLocaleString();
}

/* ============ SUBMIT BOOKING ============ */
function submitBooking(e) {
  e.preventDefault();

  const name = document.getElementById('modalName').value.trim();
  const email = document.getElementById('modalEmail').value.trim();
  const phone = document.getElementById('modalPhone').value.trim();
  const roomId = document.getElementById('modalRoom').value;
  const checkin = document.getElementById('modalCheckin').value;
  const checkout = document.getElementById('modalCheckout').value;
  const guests = document.getElementById('modalGuests').value;

  if (!name || !email || !phone) {
    showToast('Please fill all required fields');
    return;
  }

  const room = ROOMS_DB.find(r => r.id === roomId);
  if (!room) { showToast('Room not found'); return; }

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  let nights = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
  if (nights < 1 || isNaN(nights)) { showToast('Invalid dates'); return; }

  const ref = 'GA' + Date.now().toString().slice(-8).toUpperCase();

  const booking = {
    ref, name, email, phone,
    roomId: room.id,
    roomName: room.name,
    price: room.price,
    checkin, checkout, nights, guests,
    total: room.price * nights,
    createdAt: new Date().toISOString()
  };

  const bookings = JSON.parse(localStorage.getItem('ga_bookings') || '[]');
  bookings.push(booking);
  localStorage.setItem('ga_bookings', JSON.stringify(bookings));
  localStorage.setItem('ga_user', JSON.stringify({ name, email, phone }));

  document.getElementById('modalFormView').style.display = 'none';
  const successView = document.getElementById('modalSuccessView');
  successView.style.display = 'block';

  document.getElementById('bookingRef').textContent = ref;
  document.getElementById('successMessage').innerHTML = `
    <strong>${name}</strong>, your booking is confirmed!<br>
    ${room.name} · ${nights} night${nights > 1 ? 's' : ''}<br>
    ${checkin} → ${checkout}<br>
    Confirmation sent to <strong>${email}</strong>
  `;

  showToast('Booking confirmed! Ref: ' + ref);
}

/* ============ CONTACT FORM ============ */
function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We will respond within 24 hours.');
  e.target.reset();
}

/* ============ RENDER ROOM CARD ============ */
function renderRoomCard(room) {
  const featuresHtml = room.features.map(f =>
    `<span><i class="fas ${f.icon}"></i> ${f.text}</span>`
  ).join('');

  const typeTag = room.type === 'ac'
    ? '<span class="tag ac"><i class="fas fa-snowflake"></i> AC</span>'
    : '<span class="tag non-ac"><i class="fas fa-fan"></i> Non-AC</span>';

  return `
    <article class="room-card" data-type="${room.type}" data-bed="${room.bedType}" onclick="if(event.target.tagName !== 'A' && !event.target.closest('a')) window.location.href='room-details.html?id=${room.id}'">
      <div class="room-tags">
        ${typeTag}
        <span class="tag">${room.bedType.charAt(0).toUpperCase() + room.bedType.slice(1)}</span>
      </div>
      <div class="room-img">
        <img src="${room.img}" alt="${room.name}">
        <div class="room-price-badge">$${room.price.toLocaleString()} <small>/night</small></div>
      </div>
      <div class="room-info">
        <h3>${room.name}</h3>
        <div class="room-features">${featuresHtml}</div>
        <p class="room-desc">${room.desc}</p>
        <div class="room-actions">
          <a onclick="event.stopPropagation(); openBookingModal('${room.id}')" class="btn btn-gold" style="cursor:pointer;">
            <i class="fas fa-calendar-check"></i> Book Now
          </a>
          <span class="rating"><i class="fas fa-star"></i> ${room.rating} (${room.reviews})</span>
        </div>
      </div>
    </article>
  `;
}

/* ============ FILTER ROOMS ============ */
function filterRooms(filterType, btnEl) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  document.querySelectorAll('.room-card').forEach(card => {
    let show = false;
    if (filterType === 'all') show = true;
    else if (filterType === 'ac' || filterType === 'non-ac') show = card.dataset.type === filterType;
    else if (filterType === 'king' || filterType === 'twin' || filterType === 'double' || filterType === 'single')
      show = card.dataset.bed === filterType;

    card.style.display = show ? 'flex' : 'none';
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  }

  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeBookingModal(); });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBookingModal();
  });

  ['modalRoom', 'modalCheckin', 'modalCheckout', 'modalGuests'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updatePriceSummary);
  });
});
