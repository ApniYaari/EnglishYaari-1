// import WhiteLogo from '@/assets/WhiteLogo.png'

// export const WhiteLogo = WhiteLogo

import moment from "moment";

export const signupLink='https://user.englishyaari.com/Register?public=true'

export const loginLink='https://user.englishyaari.com/Login'

export let planList= [
    {
        "planType": 1,
        "subscriptionPlans": [
            {
                "subscriptionPlanId": "65c47677acd7a2f7518895f4",
                "totalSessions": 8,
                "originalPrice": 2500,
                "discountPercent": 10,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5b9daacd7a2f751889ad5",
                "totalSessions": 16,
                "originalPrice": 4750,
                "discountPercent": 10,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c4768d1346ef8f8228ad14",
                "totalSessions": 12,
                "originalPrice": 3628,
                "discountPercent": 10,
                "isRecommended": true
            }
        ]
    },
    {
        "planType": 2,
        "subscriptionPlans": [
            {
                "subscriptionPlanId": "65c476d6acd7a2f751889600",
                "totalSessions": 20,
                "originalPrice": 6240,
                "discountPercent": 15,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5c5a21346ef8f8228b291",
                "totalSessions": 24,
                "originalPrice": 7235,
                "discountPercent": 15,
                "isRecommended": true
            },
            {
                "subscriptionPlanId": "65c5c5d51346ef8f8228b2a4",
                "totalSessions": 32,
                "originalPrice": 9247,
                "discountPercent": 15,
                "isRecommended": false
            }
        ]
    },
    {
        "planType": 3,
        "subscriptionPlans": [
            {
                "subscriptionPlanId": "65c5c6151346ef8f8228b2bd",
                "totalSessions": 60,
                "originalPrice": 18960,
                "discountPercent": 25,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5c5f11346ef8f8228b2af",
                "totalSessions": 36,
                "originalPrice": 11904,
                "discountPercent": 25,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5c6071346ef8f8228b2b6",
                "totalSessions": 48,
                "originalPrice": 15680,
                "discountPercent": 25,
                "isRecommended": true
            }
        ]
    },
    {
        "planType": 4,
        "subscriptionPlans": [
            {
                "subscriptionPlanId": "65c5c6231346ef8f8228b2cd",
                "totalSessions": 72,
                "originalPrice": 26640,
                "discountPercent": 35,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5c630acd7a2f751889b38",
                "totalSessions": 96,
                "originalPrice": 34656,
                "discountPercent": 35,
                "isRecommended": true
            },
            {
                "subscriptionPlanId": "65c5c63c1346ef8f8228b2d5",
                "totalSessions": 120,
                "originalPrice": 41640,
                "discountPercent": 35,
                "isRecommended": false
            }
        ]
    },
    {
        "planType": 5,
        "subscriptionPlans": [
            {
                "subscriptionPlanId": "65c5c66cacd7a2f751889b41",
                "totalSessions": 240,
                "originalPrice": 89599,
                "discountPercent": 40,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5c6501346ef8f8228b2dd",
                "totalSessions": 150,
                "originalPrice": 59250,
                "discountPercent": 40,
                "isRecommended": false
            },
            {
                "subscriptionPlanId": "65c5c65d1346ef8f8228b2e4",
                "totalSessions": 180,
                "originalPrice": 69899,
                "discountPercent": 40,
                "isRecommended": true
            }
        ]
    },
  
   
]



export const expertisetag = {
    1: "Grammar",
    2: "Vocabulary",
    3: "IELTS Speaking",
    4: "Interview skills",
    5: "Public Speaking",
    6: "Business English",
  };


  export const vedioId = (url) => {
    // console.log(url);
    try {
      let data = url.split("/");
      //   console.log(data[data.length-1])
      return data[data.length - 1];
    } catch (error) {}
  };




export const slotTimingArray = () => {
    const generateTimeSlots = () => {
      const timeSlots = [];
      const startTime = moment("12:00 AM", "h:mm A");
  
      for (let i = 0; i < 24; i++) {
        const start = startTime.clone().add(i, "hours"); // Adjust the increment to hours
        const end = start.clone().add(1, "hour"); // Set the end time to 1 hour from the start
  
        const timeSlot = {
          startTime: start.format("h:00 A"), // Use 'h:00 A' format for '00' minutes
          endTime: end.format("h:00 A"), // Use 'h:00 A' format for '00' minutes
        };
  
        timeSlots.push(timeSlot);
      }
  
      return timeSlots;
    };
  
    const timeSlotsArray = generateTimeSlots();
    return timeSlotsArray;
  };



  

  export const primaryColor= {
    50: "#EBE7FF",
    100: "#E9DBFF",
    200: "#D9C0FF",
    300:'#C39DFF',
    400:'#803EE7',
    500:'#6D28D9',
    600:'#5D20BC',
    700:'#4D16A4',
    800:'#461495',
    900:'#310B6C',


  }



  export const teacherInformation={}