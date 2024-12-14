function assignGroup() {
    const Cpm_Input = document.getElementById("indexInput");
    const result = document.getElementById("result");

    const index = parseInt(Cpm_Input.value);

    // Define group boundaries
    //const allmemberinbis =[1,2,3,4,5,6,7,8,9,10,11,12];
    const group1Max = [25688,25716,25676,25672,25674,25705,25711,25730,25668,25681,25703,25679,25689,25713,25708,25696,25702,25729,25697];
    const group2Max = [25695,25721,25678,25691,25682,25704,25663,25671,25722,25714,25669,25670,25680,25665,25718,25684,25698,25675,25849];
    const group3Max = [25728,25700,25683,25666,25707,25677,25701,25719,25692,25664,25717,25706,25699,25723,25725,25710,25685,25660];
    const group4max = [25694,25724,25661,25686,25690,25727,25673,25732,25709,25667,25662,25731,25715,25720,25687,25712,25726,25879];

    let groupNumber;

    if (group1Max.includes(index)) {
        groupNumber = 1;
        yourTeam.textContent = `You Belong To Team -`;
        result.textContent = `THUNDERBOLTS (G1)`;
    } else if (group2Max.includes(index)) {
        groupNumber = 2;
        yourTeam.textContent = `You Belong To Team -`;
        result.textContent = `X-MEN (G2)`;
    } else if (group3Max.includes(index)) {
        groupNumber = 3;
        yourTeam.textContent = `You Belong To Team -`;
        result.textContent = `THE GUARDIANS (G3)`;
    } else if (group4max.includes(index)){ 
        groupNumber = 4;
        yourTeam.textContent = `You Belong To Team -`;
        result.textContent = 'FANTASTIC (G4)';
    } else {
        groupNumber = "PLEASE ENTER VALID CPM NUMBER"
        result.textContent = groupNumber;
    }
}


