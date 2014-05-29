using System;

namespace Abstraction
{
    abstract class Figure
    {

        public double Width { get; set; }
        public double Height { get; set; }
        public double Radius { get; set; }

        public Figure()
        {
        }

        public Figure(double radius)
        {
            if (radius < 0)
            {
                throw new ArgumentException("radius cannot be negative!");
            }
            this.Radius = radius;
        }

        public Figure(double width, double height)
        {
            if (width < 0)
            {
                throw new ArgumentException("width cannot be negative!");
            }
            if (height < 0)
            {
                throw new ArgumentException("heigth cannot be negative!");
            }
            this.Width = width;
            this.Height = height;
        }

        public virtual double CalcPerimeter()
        {
            return 0;
        }

        public virtual double CalcSurface()
        {
            return 0;
        }
    }
}
