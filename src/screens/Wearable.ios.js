import AppleHealthKit from "rn-apple-healthkit";
import { DATA_TYPES, ERRORS } from "../constants/wearables";

const typeMappings = {
  [DATA_TYPES.ActiveEnergyBurned]: AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
  [DATA_TYPES.AppleExerciseTime]: AppleHealthKit.Constants.Permissions.AppleExerciseTime,
  [DATA_TYPES.BasalEnergyBurned]: AppleHealthKit.Constants.Permissions.BasalEnergyBurned,
  [DATA_TYPES.BiologicalSex]: AppleHealthKit.Constants.Permissions.BiologicalSex,
  [DATA_TYPES.BloodGlucose]: AppleHealthKit.Constants.Permissions.BloodGlucose,
  [DATA_TYPES.BloodPressureDiastolic]: AppleHealthKit.Constants.Permissions.BloodPressureDiastolic,
  [DATA_TYPES.BloodPressureSystolic]: AppleHealthKit.Constants.Permissions.BloodPressureSystolic,
  [DATA_TYPES.BodyFatPercentage]: AppleHealthKit.Constants.Permissions.BodyFatPercentage,
  [DATA_TYPES.BodyMass]: AppleHealthKit.Constants.Permissions.BodyMass,
  [DATA_TYPES.BodyMassIndex]: AppleHealthKit.Constants.Permissions.BodyMassIndex,
  [DATA_TYPES.BodyTemperature]: AppleHealthKit.Constants.Permissions.BodyTemperature,
  [DATA_TYPES.DateOfBirth]: AppleHealthKit.Constants.Permissions.DateOfBirth,
  [DATA_TYPES.Biotin]: AppleHealthKit.Constants.Permissions.Biotin,
  [DATA_TYPES.Caffeine]: AppleHealthKit.Constants.Permissions.Caffeine,
  [DATA_TYPES.Calcium]: AppleHealthKit.Constants.Permissions.Calcium,
  [DATA_TYPES.Carbohydrates]: AppleHealthKit.Constants.Permissions.Carbohydrates,
  [DATA_TYPES.Chloride]: AppleHealthKit.Constants.Permissions.Chloride,
  [DATA_TYPES.Cholesterol]: AppleHealthKit.Constants.Permissions.Cholesterol,
  [DATA_TYPES.Copper]: AppleHealthKit.Constants.Permissions.Copper,
  [DATA_TYPES.EnergyConsumed]: AppleHealthKit.Constants.Permissions.EnergyConsumed,
  [DATA_TYPES.FatMonounsaturated]: AppleHealthKit.Constants.Permissions.FatMonounsaturated,
  [DATA_TYPES.FatPolyunsaturated]: AppleHealthKit.Constants.Permissions.FatPolyunsaturated,
  [DATA_TYPES.FatSaturated]: AppleHealthKit.Constants.Permissions.FatSaturated,
  [DATA_TYPES.FatTotal]: AppleHealthKit.Constants.Permissions.FatTotal,
  [DATA_TYPES.Fiber]: AppleHealthKit.Constants.Permissions.Fiber,
  [DATA_TYPES.Folate]: AppleHealthKit.Constants.Permissions.Folate,
  [DATA_TYPES.Iodine]: AppleHealthKit.Constants.Permissions.Iodine,
  [DATA_TYPES.Iron]: AppleHealthKit.Constants.Permissions.Iron,
  [DATA_TYPES.Magnesium]: AppleHealthKit.Constants.Permissions.Magnesium,
  [DATA_TYPES.Manganese]: AppleHealthKit.Constants.Permissions.Manganese,
  [DATA_TYPES.Molybdenum]: AppleHealthKit.Constants.Permissions.Molybdenum,
  [DATA_TYPES.Niacin]: AppleHealthKit.Constants.Permissions.Niacin,
  [DATA_TYPES.PantothenicAcid]: AppleHealthKit.Constants.Permissions.PantothenicAcid,
  [DATA_TYPES.Phosphorus]: AppleHealthKit.Constants.Permissions.Phosphorus,
  [DATA_TYPES.Potassium]: AppleHealthKit.Constants.Permissions.Potassium,
  [DATA_TYPES.Protein]: AppleHealthKit.Constants.Permissions.Protein,
  [DATA_TYPES.Riboflavin]: AppleHealthKit.Constants.Permissions.Riboflavin,
  [DATA_TYPES.Selenium]: AppleHealthKit.Constants.Permissions.Selenium,
  [DATA_TYPES.Sodium]: AppleHealthKit.Constants.Permissions.Sodium,
  [DATA_TYPES.Sugar]: AppleHealthKit.Constants.Permissions.Sugar,
  [DATA_TYPES.Thiamin]: AppleHealthKit.Constants.Permissions.Thiamin,
  [DATA_TYPES.VitaminA]: AppleHealthKit.Constants.Permissions.VitaminA,
  [DATA_TYPES.VitaminB12]: AppleHealthKit.Constants.Permissions.VitaminB12,
  [DATA_TYPES.VitaminB6]: AppleHealthKit.Constants.Permissions.VitaminB6,
  [DATA_TYPES.VitaminC]: AppleHealthKit.Constants.Permissions.VitaminC,
  [DATA_TYPES.VitaminD]: AppleHealthKit.Constants.Permissions.VitaminD,
  [DATA_TYPES.VitaminE]: AppleHealthKit.Constants.Permissions.VitaminE,
  [DATA_TYPES.VitaminK]: AppleHealthKit.Constants.Permissions.VitaminK,
  [DATA_TYPES.Zinc]: AppleHealthKit.Constants.Permissions.Zinc,
  [DATA_TYPES.Water]: AppleHealthKit.Constants.Permissions.Water,
  [DATA_TYPES.DistanceCycling]: AppleHealthKit.Constants.Permissions.DistanceCycling,
  [DATA_TYPES.DistanceWalkingRunning]: AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
  [DATA_TYPES.FlightsClimbed]: AppleHealthKit.Constants.Permissions.FlightsClimbed,
  [DATA_TYPES.HeartRate]: AppleHealthKit.Constants.Permissions.HeartRate,
  [DATA_TYPES.Height]: AppleHealthKit.Constants.Permissions.Height,  
  [DATA_TYPES.LeanBodyMass]: AppleHealthKit.Constants.Permissions.LeanBodyMass,
  [DATA_TYPES.MindfulSession]: AppleHealthKit.Constants.Permissions.MindfulSession,
  [DATA_TYPES.NikeFuel]: AppleHealthKit.Constants.Permissions.NikeFuel,
  [DATA_TYPES.RespiratoryRate]: AppleHealthKit.Constants.Permissions.RespiratoryRate,
  [DATA_TYPES.SleepAnalysis]: AppleHealthKit.Constants.Permissions.SleepAnalysis,
  [DATA_TYPES.StepCount]: AppleHealthKit.Constants.Permissions.StepCount,
  [DATA_TYPES.Steps]: AppleHealthKit.Constants.Permissions.Steps,
  [DATA_TYPES.Weight]: AppleHealthKit.Constants.Permissions.Weight,
  [DATA_TYPES.Workout]: AppleHealthKit.Constants.Permissions.Workout  
};

const funcMappings = {
  [DATA_TYPES.HeartRate]: AppleHealthKit.getHeartRateSamples,
  [DATA_TYPES.ActiveEnergyBurned]: AppleHealthKit.getActiveEnergyBurned,
  [DATA_TYPES.BasalEnergyBurned]: AppleHealthKit.getBasalEnergyBurned,
  [DATA_TYPES.BiologicalSex]: AppleHealthKit.getBiologicalSex, //no date range
  [DATA_TYPES.BloodGlucose]: AppleHealthKit.getBloodGlucoseSamples,
  ['BloodPressureSamples']: AppleHealthKit.getBloodPressureSamples, //{ unit: 'mmhg',	// optional; default 'mmhg'startDate: (new Date(2016,4,27)).toISOString(), // requiredendDate: (new Date()).toISOString(),	// optional; default nowascending: false,	// optional; default falselimit:10, // optional; default no limit};
  [DATA_TYPES.BodyTemperature]: AppleHealthKit.getBodyTemperatureSamples,// same as above
  ['DistanceCyclingSample']: AppleHealthKit.getDailyDistanceCyclingSamples,//same as above
  ['DistanceWalkingRunningSample']: AppleHealthKit.getDailyDistanceWalkingRunningSamples,// same as above
  ['FlightsClimbed']: AppleHealthKit.getDailyFlightsClimbedSamples,// same as above
  ['DailyStepCountSamples']: AppleHealthKit.getDailyStepCountSamples,
  [DATA_TYPES.DateOfBirth]: AppleHealthKit.getDateOfBirth,//no date range
  [DATA_TYPES.DistanceCycling]: AppleHealthKit.getDistanceCycling, //{ unit: 'mile', // optional; default 'meter' date: (new Date(2016,5,1)).toISOString(), // optional; default now};
  [DATA_TYPES.DistanceWalkingRunning]: AppleHealthKit.getDistanceWalkingRunning,// same as above
  [DATA_TYPES.FlightsClimbed]: AppleHealthKit.getFlightsClimbed, // {date: (new Date(2016,5,1)).toISOString(), // optional; default now};
  ['HeightSamples']: AppleHealthKit.getHeightSamples, //{ unit: 'bpm', // optional; default 'bpm' startDate: (new Date(2016,4,27)).toISOString(), // required endDate: (new Date()).toISOString(), // optional; default now ascending: false, // optional; default false limit:10, // optional; default no limit};
  ['Bmi']: AppleHealthKit.getLatestBmi,//same as above unit:'inch'
  ['BodyFatPercentage']: AppleHealthKit.getLatestBodyFatPercentage,//no range
  ['BodyFatPercentageSamples']: AppleHealthKit.getBodyFatPercentageSamples,//no range
  [DATA_TYPES.Height]: AppleHealthKit.getLatestHeight,//no range
  [DATA_TYPES.LeanBodyMass]: AppleHealthKit.getLatestLeanBodyMass,//range
  ['LeanBodyMassSample']: AppleHealthKit.getLeanBodyMassSamples,//range with uni: 'pound'
  [DATA_TYPES.Weight]: AppleHealthKit.getLatestWeight,// {unit: 'pound'};
  [DATA_TYPES.RespiratoryRate]: AppleHealthKit.getRespiratoryRateSamples,//date range with unit; 'bpm'
  [DATA_TYPES.SleepAnalysis]: AppleHealthKit.getSleepSamples,
  [DATA_TYPES.StepCount]: AppleHealthKit.getStepCount,//let d = new Date(2016,1,1); let options = {date: d.toISOString()};
  ['WeightSample']: AppleHealthKit.getWeightSamples,//date range with unit:'pound'
  ['OtherSample']: AppleHealthKit.getSamples//type: 'Walking', // one of: ['Walking', 'StairClimbing', 'Running', 'Cycling', 'Workout']

};



const Data = {
  Types: DATA_TYPES,

  authorize(dataTypes) {
    alert(dataTypes)
    return new Promise((resolve, reject) => {
      AppleHealthKit.initHealthKit(
        {
          permissions: {
            read: dataTypes.map(dt => typeMappings[dt])
          }
        },
        err => {
          if (err) reject(new Error(ERRORS.failedInit));
          else resolve();
        }
      );
    });
  },

  read(dataType, options, key,value) {
    return new Promise((resolve, reject) => {
      var tempOption;
      if(key == 's'){
        tempOption = null;
      }else{
        tempOption ={
          startDate: options.startDate.toISOString(),
          endDate: options.endDate.toISOString()
        }
      }
      
      funcMappings[dataType](
        tempOption
        ,
        (err, samples) => {
          if (err) reject(new Error(ERRORS.failedQuery));
          else resolve(samples);
        }
      );
    });
  }
};

export default Data ;