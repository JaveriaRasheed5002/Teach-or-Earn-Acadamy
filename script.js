// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Interactive Fee Calculator
const feeForm = document.getElementById('feeForm');
const feeResult = document.getElementById('feeResult');

feeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const monthlyRate = parseFloat(document.getElementById('feeCourse').value);
  const duration = parseInt(document.getElementById('feeDuration').value);

  if (isNaN(monthlyRate) || isNaN(duration)) {
    alert('Please select both a program and a duration plan.');
    return;
  }

  const totalOriginal = monthlyRate * duration;
  let discount = 0;

  if (duration === 6) discount = 10;
  else if (duration === 3) discount = 5;

  const discountAmount = (totalOriginal * discount) / 100;
  const finalFee = totalOriginal - discountAmount;

  feeResult.className = 'result-box success';
  feeResult.innerHTML = `
    <h4><i class="fa-solid fa-receipt"></i> Tuition Fee Breakup</h4>
    <p><strong>Original Subtotal:</strong> $${totalOriginal.toLocaleString()}</p>
    <p><strong>Scholarship Discount (${discount}%):</strong> -$${discountAmount.toLocaleString()}</p>
    <p style="font-size: 1.15rem; margin-top: 10px;"><strong>Final Payable Amount:</strong> <span style="color: var(--primary-bright); font-weight: 800;">$${finalFee.toLocaleString()}</span></p>
  `;
  feeResult.classList.remove('hidden');
});

// Online Admission Eligibility Checker Form
const admissionForm = document.getElementById('admissionForm');
const admissionResult = document.getElementById('admissionResult');

admissionForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const marks = parseFloat(document.getElementById('studentMarks').value);
  const course = document.getElementById('desiredCourse').value;

  if (!name || isNaN(marks) || !course) {
    alert('Please fill in all required fields.');
    return;
  }

  let statusClass = '';
  let title = '';
  let msg = '';

  if (marks >= 70) {
    statusClass = 'success';
    title = '🎉 Congratulations! Direct Admission Granted';
    msg = `Dear <strong>${name}</strong>, with an academic standing of <strong>${marks}%</strong>, you qualify for <strong>Direct Priority Admission</strong> in <strong>${course}</strong> along with scholarship merit consideration!`;
  } else if (marks >= 50) {
    statusClass = 'warning';
    title = '📑 Admission Eligible (Counseling Recommended)';
    msg = `Dear <strong>${name}</strong>, with a score of <strong>${marks}%</strong>, you are eligible for <strong>${course}</strong>. Please complete your short orientation session.`;
  } else {
    statusClass = 'warning';
    title = '📞 Academic Counseling Recommended';
    msg = `Dear <strong>${name}</strong>, please schedule a one-on-one session with our academic counselor for tailored program guidance.`;
  }

  admissionResult.className = `result-box ${statusClass}`;
  admissionResult.innerHTML = `
    <h4>${title}</h4>
    <p>${msg}</p>
  `;
  admissionResult.classList.remove('hidden');
});

// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((q) => {
  q.addEventListener('click', () => {
    const parent = q.parentElement;
    
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== parent) item.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});