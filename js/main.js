/* ============================================================
   GRAND AURELIA — Main JavaScript (Enhanced)
   Features: Intro, Rooms, Booking, Coupon, Wishlist, Confetti,
             Toasts, Scroll Progress, Back to Top, Lightbox
   ============================================================ */

/* ============ ROOMS DATABASE ============ */
const ROOMS_DB = [
  {
    id: "deluxe-king-ac",
    name: "Deluxe King Room",
    type: "ac",
    bedType: "king",
    price: 289,
    discount: 15,
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
    discount: 20,
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
    discount: 10,
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

/* ============ COUPONS ============ */
const COUPONS = {
  "GRAND10": { type: "percent", value: 10, label: "10% OFF" },
  "FESTIVE20": { type: "percent", value: 20, label: "20% OFF" },
  "WELCOME50": { type: "flat", value: 50, label: "$50 OFF" },
  "SUITE15": { type: "percent", value: 15, label: "15% OFF Suites" }
};

let activeCoupon = null;

/* ============ WISHLIST ============ */
function getWishlist() {
  return JSON.parse(localStorage.getItem('ga_wishlist') || '[]');
}

function saveWishlist(list) {
  localStorage.setItem('ga_wishlist', JSON.stringify(list));
  updateWishlistCount();
}

function isInWishlist(roomId) {
  return getWishlist().includes(roomId);
}

function toggleWishlist(roomId, event) {
  if (event) event.stopPropagation();
  let list = getWishlist();
  const idx = list.indexOf(roomId);
  if (idx > -1) {
    list.splice(idx, 1);
    showToast('info', 'Removed', 'Room removed from wishlist');
  } else {
    list.push(roomId);
    showToast('success', 'Added!', 'Room saved to your wishlist');
  }
  saveWishlist(list);
  document.querySelectorAll('.wishlist-btn[data-room="' + roomId + '"]').forEach(btn => {
    btn.classList.toggle('active', list.includes(roomId));
  });
}

function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ============ WISHLIST PANEL ============ */
function openWishlistPanel() {
  renderWishlistPanel();
  document.getElementById('wishlistPanel').classList.add('active');
  document.getElementById('wishlistOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistPanel() {
  document.getElementById('wishlistPanel').classList.remove('active');
  document.getElementById('wishlistOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderWishlistPanel() {
  const list = getWishlist();
  const body = document.getElementById('wishlistPanelBody');
  const actions = document.getElementById('wishlistActions');
  if (!body) return;

  if (list.length === 0) {
    body.innerHTML = `
      <div class="wishlist-empty">
        <i class="fas fa-heart"></i>
        <h4>Your Wishlist is Empty</h4>
        <p>Start saving your favourite rooms to see them here.</p>
      </div>
    `;
    if (actions) actions.style.display = 'none';
    return;
  }

  const rooms = ROOMS_DB.filter(r => list.includes(r.id));
  body.innerHTML = rooms.map(room => `
    <div class="wishlist-item">
      <img src="${room.img}" alt="${room.name}">
      <div class="wishlist-item-info">
        <h4>${room.name}</h4>
        <div class="meta">${room.type.toUpperCase()} · ${room.bedType} bed</div>
        <div class="price">$${room.price}/night</div>
      </div>
      <button class="wishlist-item-remove" onclick="removeFromWishlist('${room.id}')" title="Remove">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');

  if (actions) actions.style.display = 'flex';
}

function removeFromWishlist(roomId) {
  let list = getWishlist();
  list = list.filter(id => id !== roomId);
  saveWishlist(list);
  renderWishlistPanel();
  document.querySelectorAll('.wishlist-btn[data-room="' + roomId + '"]').forEach(btn => {
    btn.classList.remove('active');
  });
  showToast('info', 'Removed', 'Room removed from wishlist');
}

/* ============ TOAST (Enhanced 4-types) ============ */
let toastTimer;
function showToast(type, title, message) {
  // Support old signature: showToast('message')
  if (arguments.length === 1) {
    message = title;
    title = 'Notice';
    type = 'info';
  } else if (arguments.length === 2 && ['success','error','warning','info'].indexOf(type) === -1) {
    message = title;
    title = type;
    type = 'info';
  }

  const toast = document.getElementById('toast');
  if (!toast) return;

  const icons = {
    success: 'fa-check-circle',
    error: 'fa-times-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };

  toast.className = 'toast toast-' + type;
  toast.innerHTML = `
    <div class="toast-icon"><i class="fas ${icons[type] || icons.info}"></i></div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close" onclick="hideToast()"><i class="fas fa-times"></i></button>
  `;

  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function hideToast() {
  const toast = document.getElementById('toast');
  if (toast) toast.classList.remove('show');
  clearTimeout(toastTimer);
}

/* ============ CONFETTI ============ */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;

  canvas.classList.add('active');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#C6A15B', '#E9D7A7', '#A8893A', '#F5E6C0', '#FFF3D6', '#ffffff'];
  const particles = [];

  for (let i = 0; i < 180; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: 8 + Math.random() * 10,
      h: 6 + Math.random() * 8,
      vx: (Math.random() - 0.5) * 4,
      vy: 3 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  const maxFrames = 280;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.06;
      p.rot += p.vrot;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
      if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    frame++;
    if (frame < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove('active');
    }
  }

  draw();
}

/* ============ COUPON ============ */
function applyCoupon(inputId, context) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('warning', 'Empty code', 'Please enter a coupon code');
    return;
  }
  if (!COUPONS[code]) {
    showToast('error', 'Invalid Coupon', 'This code is not valid');
    return;
  }
  activeCoupon = { code, ...COUPONS[code] };
  showToast('success', 'Coupon Applied!', activeCoupon.label + ' on your booking');
  renderCouponApplied(context);
  updatePriceSummary();
}

function removeCoupon(context) {
  activeCoupon = null;
  showToast('info', 'Coupon removed', 'Discount removed from booking');
  renderCouponApplied(context);
  updatePriceSummary();
}

function renderCouponApplied(context) {
  const target = document.getElementById('coupon' + (context === 'modal' ? 'Modal' : 'Card') + 'Box');
  if (!target) return;

  if (activeCoupon) {
    target.innerHTML = `
      <div class="coupon-applied">
        <i class="fas fa-check-circle"></i>
        <span><strong>${activeCoupon.code}</strong> · ${activeCoupon.label}</span>
        <button class="remove-coupon" onclick="removeCoupon('${context}')">Remove</button>
      </div>
    `;
  } else {
    target.innerHTML = `
      <div class="coupon-input-row">
        <input type="text" id="coupon${context === 'modal' ? 'Modal' : 'Card'}Input" placeholder="Enter coupon code" maxlength="15">
        <button class="coupon-apply-btn" onclick="applyCoupon('coupon${context === 'modal' ? 'Modal' : 'Card'}Input', '${context}')">Apply</button>
      </div>
      <div class="coupon-hints">
        <span class="coupon-hint" onclick="quickCoupon('GRAND10','${context}')">GRAND10</span>
        <span class="coupon-hint" onclick="quickCoupon('FESTIVE20','${context}')">FESTIVE20</span>
        <span class="coupon-hint" onclick="quickCoupon('WELCOME50','${context}')">WELCOME50</span>
      </div>
    `;
  }
}

function quickCoupon(code, context) {
  const inputId = 'coupon' + (context === 'modal' ? 'Modal' : 'Card') + 'Input';
  const input = document.getElementById(inputId);
  if (input) input.value = code;
  applyCoupon(inputId, context);
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

  // Reset coupon UI
  activeCoupon = null;
  renderCouponApplied('modal');

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
function calculateTotal(room, checkin, checkout, guests, applyDiscount) {
  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  let nights = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
  if (nights < 1 || isNaN(nights)) nights = 1;

  let guestCount = parseInt(guests) || 1;
  let extraGuestFee = 0;
  if (guestCount > 2) extraGuestFee = (guestCount - 2) * 30 * nights;

  const subtotal = (room.price * nights) + extraGuestFee;
  let discount = 0;
  if (applyDiscount && activeCoupon) {
    if (activeCoupon.type === 'percent') {
      discount = Math.round(subtotal * activeCoupon.value / 100);
    } else if (activeCoupon.type === 'flat') {
      discount = Math.min(activeCoupon.value, subtotal);
    }
  }
  const afterDiscount = subtotal - discount;
  const taxes = Math.round(afterDiscount * 0.12);
  const total = afterDiscount + taxes;

  return { nights, subtotal, discount, taxes, total };
}

function updatePriceSummary() {
  const roomSelect = document.getElementById('modalRoom');
  const checkin = document.getElementById('modalCheckin').value;
  const checkout = document.getElementById('modalCheckout').value;
  const guests = document.getElementById('modalGuests').value;

  if (!roomSelect || !checkin || !checkout) return;

  const room = ROOMS_DB.find(r => r.id === roomSelect.value);
  if (!room) return;

  const c = calculateTotal(room, checkin, checkout, guests, true);

  const summary = document.getElementById('priceSummary');
  if (summary) {
    summary.innerHTML = `
      <div>
        <div style="font-size:0.85rem;color:var(--text-muted);">${room.name} × ${c.nights} night${c.nights > 1 ? 's' : ''}</div>
        ${c.discount > 0 ? `<div style="font-size:0.85rem;color:#2E7D32;margin-top:4px;"><i class="fas fa-tag"></i> Discount (${activeCoupon.code})</div>` : ''}
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">Taxes (12%)</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.95rem;">$${c.subtotal.toLocaleString()}</div>
        ${c.discount > 0 ? `<div style="font-size:0.85rem;color:#2E7D32;margin-top:4px;">-$${c.discount.toLocaleString()}</div>` : ''}
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">$${c.taxes.toLocaleString()}</div>
      </div>
    `;
  }

  const totalEl = document.getElementById('totalPrice');
  if (totalEl) totalEl.textContent = '$' + c.total.toLocaleString();
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
    showToast('error', 'Missing info', 'Please fill all required fields');
    return;
  }

  const room = ROOMS_DB.find(r => r.id === roomId);
  if (!room) { showToast('error', 'Room not found', 'Please try again'); return; }

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  if (d2 <= d1) { showToast('error', 'Invalid dates', 'Check-out must be after check-in'); return; }

  const c = calculateTotal(room, checkin, checkout, guests, true);
  const ref = 'GA' + Date.now().toString().slice(-8).toUpperCase();

  const booking = {
    ref, name, email, phone,
    roomId: room.id,
    roomName: room.name,
    price: room.price,
    checkin, checkout, nights: c.nights, guests,
    subtotal: c.subtotal,
    discount: c.discount,
    couponCode: activeCoupon ? activeCoupon.code : null,
    taxes: c.taxes,
    total: c.total,
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
    ${room.name} · ${c.nights} night${c.nights > 1 ? 's' : ''}<br>
    ${checkin} → ${checkout}<br>
    Total: <strong>$${c.total.toLocaleString()}</strong><br>
    Confirmation sent to <strong>${email}</strong>
  `;

  // Confetti!
  setTimeout(() => launchConfetti(), 300);

  showToast('success', 'Booking Confirmed!', 'Ref: ' + ref);
  activeCoupon = null;
}

/* ============ CONTACT FORM ============ */
function submitContact(e) {
  e.preventDefault();
  showToast('success', 'Message sent!', 'We will respond within 24 hours.');
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

  const inWishlist = isInWishlist(room.id);
  const discountBadge = room.discount
    ? `<div class="discount-badge"><i class="fas fa-tag"></i> ${room.discount}% OFF</div>`
    : '';

  return `
    <article class="room-card" data-type="${room.type}" data-bed="${room.bedType}" onclick="if(event.target.tagName !== 'A' && !event.target.closest('a') && !event.target.closest('.wishlist-btn')) window.location.href='room-details.html?id=${room.id}'">
      <div class="room-tags">
        ${typeTag}
        <span class="tag">${room.bedType.charAt(0).toUpperCase() + room.bedType.slice(1)}</span>
      </div>
      ${discountBadge}
      <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-room="${room.id}" onclick="toggleWishlist('${room.id}', event)" title="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
        <i class="fa-heart ${inWishlist ? 'fas' : 'far'}"></i>
      </button>
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

/* ============ LIGHTBOX ============ */
let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lightboxImg').src = images[index];
  document.getElementById('lightboxCounter').textContent = (index + 1) + ' / ' + images.length;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

function lightboxNavigate(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
  document.getElementById('lightboxCounter').textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
}

/* ============ SCROLL PROGRESS + BACK TO TOP ============ */
function initScrollFeatures() {
  const progress = document.getElementById('scrollProgress');
  const backBtn = document.getElementById('backToTop');

  function onScroll() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (progress) progress.style.width = scrolled + '%';
    if (backBtn) {
      if (h.scrollTop > 400) backBtn.classList.add('show');
      else backBtn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', function () {
  // Menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  }

  // Modal close
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeBookingModal(); });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeLightbox();
      if (typeof closeWishlistPanel === 'function') closeWishlistPanel();
    }
    if (e.key === 'ArrowLeft' && document.getElementById('lightbox')?.classList.contains('active')) {
      lightboxNavigate(-1);
    }
    if (e.key === 'ArrowRight' && document.getElementById('lightbox')?.classList.contains('active')) {
      lightboxNavigate(1);
    }
  });

  ['modalRoom', 'modalCheckin', 'modalCheckout', 'modalGuests'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updatePriceSummary);
  });

  updateWishlistCount();
  initScrollFeatures();
});
