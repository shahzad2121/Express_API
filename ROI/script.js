// Function to calculate ROI and other metrics
function calculateROI() {
    // Get input values
    const monthlyVisitors = parseFloat(document.getElementById("monthlyVisitors").value);
    const conversionRate = parseFloat(document.getElementById("conversionRate").value);
    const averageDealSize = parseFloat(document.getElementById("averageDealSize").value);
    const salesCloseRate = parseFloat(document.getElementById("salesCloseRate").value);
    const marketingBudget = parseFloat(document.getElementById("marketingBudget").value);
    const leadToOpportunityRate = parseFloat(document.getElementById("leadToOpportunityRate").value);
    const salesCycleDays = parseFloat(document.getElementById("salesCycleDays").value);
    const customerLifetimeValue = parseFloat(document.getElementById("customerLifetimeValue").value);

    // Validate inputs
    if (isNaN(monthlyVisitors) || isNaN(conversionRate) || isNaN(averageDealSize) || isNaN(salesCloseRate) || isNaN(marketingBudget) || isNaN(leadToOpportunityRate) || isNaN(salesCycleDays) || isNaN(customerLifetimeValue)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Calculations
    const monthlyLeads = Math.round((monthlyVisitors * conversionRate) / 100);
    const monthlyOpportunities = Math.round((monthlyLeads * leadToOpportunityRate) / 100);
    const monthlyCustomers = Math.round((monthlyOpportunities * salesCloseRate) / 100);
    const monthlyRevenue = monthlyCustomers * averageDealSize;
    const annualRevenue = monthlyRevenue * 12;
    const costPerLead = marketingBudget / monthlyLeads;
    const customerAcquisitionCost = (marketingBudget * (salesCycleDays / 30)) / monthlyCustomers;
    const monthlyROI = ((monthlyRevenue - marketingBudget) / marketingBudget) * 100;
    const annualROI = ((annualRevenue - (marketingBudget * 12)) / (marketingBudget * 12)) * 100;

    // Scoring System
    let trafficScore = 0;
    if (monthlyVisitors >= 50000) trafficScore = 10;
    else if (monthlyVisitors >= 10000) trafficScore = 7;
    else if (monthlyVisitors >= 1000) trafficScore = 5;
    else trafficScore = 3;

    let conversionScore = 0;
    if (conversionRate >= 3) conversionScore = 10;
    else if (conversionRate >= 2) conversionScore = 7;
    else if (conversionRate >= 1) conversionScore = 5;
    else conversionScore = 3;

    let leadToOpportunityScore = 0;
    if (leadToOpportunityRate >= 40) leadToOpportunityScore = 10;
    else if (leadToOpportunityRate >= 30) leadToOpportunityScore = 7;
    else if (leadToOpportunityRate >= 20) leadToOpportunityScore = 5;
    else leadToOpportunityScore = 3;

    const totalScore = trafficScore + conversionScore + leadToOpportunityScore;

    // Lead Classification
    let leadClassification = "";
    if (totalScore >= 80) leadClassification = "Hot Lead";
    else if (totalScore >= 60) leadClassification = "Warm Lead";
    else if (totalScore >= 40) leadClassification = "Nurture Lead";
    else leadClassification = "Cold Lead";

    // Display Results
    document.getElementById("monthlyLeads").innerText = monthlyLeads.toLocaleString();
    document.getElementById("monthlyRevenue").innerText = monthlyRevenue.toLocaleString();
    document.getElementById("annualRevenue").innerText = annualRevenue.toLocaleString();
    document.getElementById("costPerLead").innerText = costPerLead.toFixed(2);
    document.getElementById("customerAcquisitionCost").innerText = customerAcquisitionCost.toFixed(2);
    document.getElementById("monthlyROI").innerText = monthlyROI.toFixed(1) + "%";
    document.getElementById("annualROI").innerText = annualROI.toFixed(1) + "%";
    document.getElementById("leadClassification").innerText = leadClassification;
}

// Attach the function to the button
document.getElementById("calculateButton").addEventListener("click", calculateROI);