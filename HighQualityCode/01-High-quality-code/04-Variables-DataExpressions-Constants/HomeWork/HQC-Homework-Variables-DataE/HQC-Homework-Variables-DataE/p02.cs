using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HQC_Homework_Variables_DataE
{ //Refactor the following code to apply variable usage and naming best practices:
    class p02
    {
        public void PrintStatistics(double[] arr, int count)
        {
            double min, max, actualNum;
            max = arr[0];
            for (int i = 0; i < count; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                }
            }

            PrintMax(max);
            
            min = arr[0];
            for (int i = 0; i < count; i++)
            {
                if (min<arr[i])
                {
                    min = arr[i];
                }
            }
            PrintMin(min);

            actualNum = 0;
            for (int i = 0; i < count; i++)
            {
                actualNum += arr[i];
            }
            PrintAvg(actualNum / count);

        }
    }
}


