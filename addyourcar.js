function toggleSubscriptionPlans() {
    const subscriptionType = document.getElementById('subscription-type').value;
    const individualPlans = document.getElementById('individual-plans');
    const companyPlans = document.getElementById('company-plans');

    individualPlans.style.display = subscriptionType === 'individual' ? 'block' : 'none';
    companyPlans.style.display = subscriptionType === 'company' ? 'block' : 'none';
}

// Ensure the form step navigation code is present

let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((element) => {
        element.classList.remove('active');
    });
    document.getElementById(`step-${step}`).classList.add('active');
}

function nextStep() {
    currentStep++;
    showStep(currentStep);
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
}

// Initialize first step
showStep(currentStep);
