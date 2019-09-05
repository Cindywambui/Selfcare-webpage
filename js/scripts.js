$(document).ready(function(){

$("button#physical").click(function(){
$("div.physicals").fadeOut();
$("div.socials").fadeIn();
});
$("button#social").click(function(){
    $("div.social").fadeOut();
    $("div.Mental").fadeIn();
    });
    $("button#mental").click(function(){
        $("div.Mental").fadeOut();
        $("div.emotional").fadeIn();
        });
        $("button#emotional").click(function(){
            $("div.emotional").fadeOut();
            $("div.buttons").fadeIn();
            });
            
});





class FitnessCheck {

    constructor() {
        this.fitnessPerc = 0;
        this.totalFitnessPoints = 0;
        this.physicalStatusPoints = 0;
        this.socialStatusPoints = 0;
        this.mentalStatusPoints = 0;
        this.emotionalStatusPoints = 0;

    }


    /**
    * Gets the hydration, sleep, health and breath points
    * from the radio inputs the user gave and sums their values
    * to give the total physical status points
    * 
    * @returns {totalPhysicalStatusPoints}
    */
    getPhysicalStatusPoints() {
        var hydrationPoints = parseInt($("input[name='hydration']:checked").val());
        var sleepPoints = parseInt($("input[name='sleep']:checked").val());
        var healthPoints = parseInt($("input[name='health']:checked").val());
        var breathPoints = parseInt($("input[name='breaths']:checked").val());


        var totalPhysicalStatusPoints = hydrationPoints + sleepPoints + healthPoints + breathPoints;

        // console.log(totalPhysicalStatusPoints);

        this.physicalStatusPoints = totalPhysicalStatusPoints

        return totalPhysicalStatusPoints
    }

    /**
    * Gets the self-care, family, time, talking and happy points
    * from the radio inputs the user gave and sums their values
    * to give the total social status points.
    * 
    * @returns {totalSocialStatusPoints}
    */
    getSocialStatusPoints() {
        var selfPoints = parseInt($("input[name='yourself']:checked").val());
        var familyPoints = parseInt($("input[name='family']:checked").val());
        var timePoints = parseInt($("input[name='time']:checked").val());
        var talkPoints = parseInt($("input[name='talk']:checked").val());
        var happyPoints = parseInt($("input[name='happy']:checked").val());


        var totalSocialStatusPoints = selfPoints + familyPoints + timePoints + talkPoints + happyPoints;

        // console.log(totalSocialStatusPoints);

        this.socialStatusPoints = totalSocialStatusPoints

        return totalSocialStatusPoints
    }


    /**
    * Gets the trust, lonely, mood, thought and struggle points
    * from the radio inputs the user gave and sums their values
    * to give the total mental status points.
    * 
    * @returns {totalMentalStatusPoints}
    */
    getMentalStatusPoints() {
        var trustPoints = parseInt($("input[name='trust']:checked").val());
        var lonelyPoints = parseInt($("input[name='lonely']:checked").val());
        var moodPoints = parseInt($("input[name='mood']:checked").val());
        var thoughtPoints = parseInt($("input[name='think']:checked").val());
        var strugglePoints = parseInt($("input[name='struggle']:checked").val());


        var totalMentalStatusPoints = trustPoints + lonelyPoints + moodPoints + thoughtPoints + strugglePoints;

        // console.log(totalMentalStatusPoints);

        this.mentalStatusPoints = totalMentalStatusPoints

        return totalMentalStatusPoints
    }


    /**
    * Gets the emotional-status, loss, relationship and overall-health points
    * from the radio inputs the user gave and sums their values
    * to give the total emotional status points.
    * 
    * @returns {totalEmotionalStatusPoints}
    */
    getEmotionalStatusPoints() {
        var emotionalStatusPoints = parseInt($("input[name='emotional-status']:checked").val());
        var lossPoints = parseInt($("input[name='loss']:checked").val());
        var relationshipPoints = parseInt($("input[name='relationship']:checked").val());
        var overallHealthPoints = parseInt($("input[name='overall-health']:checked").val());


        var totalEmotionalStatusPoints = emotionalStatusPoints + lossPoints + relationshipPoints + overallHealthPoints;

        // console.log(totalEmotionalStatusPoints);

        this.emotionalStatusPoints = totalEmotionalStatusPoints

        return totalEmotionalStatusPoints
    }


    /**
    * Sums the physicalStatusPoints, socialStatusPoints, emotionalStatusPoints
    *  and mentalStatusPoints to give the totalFitnessPoints
    *
    * @returns {totalFitnessStatusPoints}
    */
    calculateTotalFitnessPoints() {

        this.totalFitnessPoints = this.physicalStatusPoints + this.socialStatusPoints + this.emotionalStatusPoints + this.mentalStatusPoints


        console.log(this.totalFitnessPoints)

        return this.totalFitnessPoints
    }

    /**
    * Calculates fitness percantage
    * @param {number} fitnessCategoryPoints - The fitness category points.
    * @param {number} maxPoints - The max points for a category.
    * @returns {fitnessCategoryPerc} - The fitness category percentage
    */
    calculatelFitnessPerc(fitnessCategoryPoints, maxPoints) {

        var fitnessCategoryPerc = fitnessCategoryPoints / maxPoints * 100

        return fitnessCategoryPerc
    }


    /**
    * populates fitness report modal with the
    * respective percentages of each category
    *
    */
    populateFitnessReport() {

        var overallFitnessPerc = this.calculatelFitnessPerc(this.totalFitnessPoints, 80)
        var physicalFitnessPerc = this.calculateTotalFitnessPoints(this.physicalStatusPoints, 20)
        var emotionalFitnessPerc = this.calculateTotalFitnessPoints(this.emotionalStatusPoints, 20)
        var mentalFitnessPerc = this.calculateTotalFitnessPoints(this.mentalStatusPoints, 20)
        var socialFitnessPerc = this.calculateTotalFitnessPoints(this.socialStatusPoints, 20)

        $('#overall_fit').html(overallFitnessPerc + '%')
        $('#social_fit').html(socialFitnessPerc + '%')
        $('#mental_fit').html(mentalFitnessPerc + '%')
        $('#phyc_fit').html(physicalFitnessPerc + '%')
        $('#emot_fit').html(emotionalFitnessPerc + '%')

    }


}


var fitness_check = new FitnessCheck();

$(document).ready(function () {


    $("button.physical.next").click(function () {
        fitness_check.getPhysicalStatusPoints()
        $("div.physicals").fadeOut(1);
        $("div.social").fadeIn(1);
    });
    $("button.social.back").click(function () {
        $("div.social").fadeOut(1);
        $("div.physicals").fadeIn(1);
    });

    $("button.social.next").click(function () {
        fitness_check.getSocialStatusPoints()
        $("div.social").fadeOut(1);
        $("div.mental").fadeIn(1);
    });
    $("button.mental.back").click(function () {
        fitness_check.getPhysicalStatusPoints()
        $("div.mental").fadeOut(1);
        $("div.social").fadeIn(1);
    });


    $("button.mental.next").click(function () {
        fitness_check.getMentalStatusPoints()
        $("div.mental").fadeOut(1);
        $("div.emotional").fadeIn(1);
    });
    $("button.emotional.back").click(function () {
        $("div.emotional").fadeOut(1);
        $("div.mental").fadeIn(1);
    });

    $("button.emotional.submit").click(function () {
        fitness_check.getEmotionalStatusPoints()
        fitness_check.calculateTotalFitnessPoints();
        fitness_check.populateFitnessReport();
    });


});

