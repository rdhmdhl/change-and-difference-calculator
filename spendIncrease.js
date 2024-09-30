document.getElementById("getIncreasedSpendResults").onclick = function() {
    let spend = document.getElementById("spend").value;
    let cpc = document.getElementById("average_cpc").value;
    let ctr = document.getElementById("average_ctr").value;
    let impressions = document.getElementById("impressions").value;
    let impression_share = document.getElementById("impression_share").value;
    let impression_share_lost = document.getElementById("impression_share_lost_budget").value;

    let metrics = [spend, cpc, ctr, impressions, impression_share, impression_share_lost];

    for (let i = 0; i < metrics.length; i++) {
        // remove $ % and , characters for all metrics
        metrics[i] = metrics[i].replace(/\$/g, '').replace(/,/g, '').replace(/%/g, '');
        metrics[i] = parseFloat(metrics[i]);
    };

    // reasign parsed metrics
    [spend, cpc, ctr, impressions, impression_share, impression_share_lost] = metrics;

    // Input validation
    let errors = [];

    // Validate percentages
    if (ctr < 0 || ctr > 100 || isNaN(ctr)) {
        errors.push("CTR must be between 0% and 100%.");
    }
    if (impression_share < 0 || impression_share > 100 || isNaN(impression_share)) {
        errors.push("Impression Share must be between 0% and 100%.");
    }
    if (impression_share_lost < 0 || impression_share_lost > 100 || isNaN(impression_share_lost)) {
        errors.push("Impression Share Lost (budget) must be between 0% and 100%.");
    }

    // Validate other metrics
    if (spend <= 0 || isNaN(spend)) {
        errors.push("Spend must be greater than 0.");
    }
    if (cpc <= 0 || isNaN(cpc)) {
        errors.push("Average CPC must be greater than 0.");
    }
    if (impressions <= 0 || isNaN(impressions)) {
        errors.push("Impressions must be greater than 0.");
    }

    // If there are errors, display them and stop execution
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return; // Exit the function if validation fails
    }


    // Proceed with calculations
    const total_available_impressions = impressions / (impression_share / 100);
    const total_impressions_lost = total_available_impressions * (impression_share_lost / 100);
    const total_additional_clicks = (ctr / 100) * total_impressions_lost;
    const additional_cost = total_additional_clicks * cpc;

    // Formatting numbers
    const formatted_total_available_impressions = total_available_impressions.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const formatted_total_impressions_lost = total_impressions_lost.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const formatted_total_additional_clicks = total_additional_clicks.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const formatted_additional_cost = additional_cost.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

    // Display results
    document.getElementById("insertIncreasedSpendImpressions").innerHTML = "Available impressions: " + formatted_total_available_impressions;
    document.getElementById("insertTotalImpressionsLost").innerHTML = "Impressions lost (budget): " + formatted_total_impressions_lost;
    document.getElementById("insertAddititionalClicks").innerHTML = "Additional clicks: " + formatted_total_additional_clicks;
    document.getElementById("insertIncreasedSpendResults").innerHTML = "Available spend: " + formatted_additional_cost;
}