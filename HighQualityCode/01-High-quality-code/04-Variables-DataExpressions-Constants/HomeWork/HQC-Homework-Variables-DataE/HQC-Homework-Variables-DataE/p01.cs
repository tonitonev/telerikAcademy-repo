using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HQC_Homework_Variables_DataE
{ //Refactor the following code to use proper variable naming and simplified expressions:
    public class Size
    {
        public double width, height;
        public Size(double w, double h)
        {
            this.width = w;
            this.height = h;
        }

        public static Size GetRotatedSize(Size s, double angleOfRotation)
        {
            var cos = Math.Cos(angleOfRotation);
            var sin = Math.Sin(angleOfRotation);
            var size = Math.Abs(cos) * s.width + Math.Abs(sin) * s.height;
            var angle = Math.Abs(sin) * s.width + Math.Abs(cos) * s.height;

            return new Size(size, angle);
        }

    }
}
