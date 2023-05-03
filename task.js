const input_Dict1 = 
{
    '2020-01-01':  4,
    '2020-01-02':  4,
    '2020-01-03':  6,
    '2020-01-04':  8,
    '2020-01-05':  2,
    '2020-01-06': -6,
    '2020-01-07':  2,
    '2020-01-08': -2,
};
const input_Dict2 = 
{
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4
};

function valuecountbyDay(input_Dict)
{
    const daysList = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const output_Dict = {};

    daysList.forEach((val) => {
        output_Dict[val] = 0;
    });

    for(date_key in input_Dict)
    {
        const date = new Date(date_key);
        const day = daysList[date.getDay()];
        const value = input_Dict[date_key];
        output_Dict[day] += value; 
    }
    for (let i = 0; i < daysList.length; i++)
    {
        const day = daysList[i];
        if(!output_Dict[day])
        {
          const prev = daysList[(i - 1 + 7) % 7];
          const next = daysList[(i + 1) % 7];
          const mean = (output_Dict[prev] + output_Dict[next]) / 2;
          output_Dict[day] = mean;
        }
      }
    return output_Dict
}

const output_Dict = valuecountbyDay(input_Dict2);
console.log(output_Dict);



