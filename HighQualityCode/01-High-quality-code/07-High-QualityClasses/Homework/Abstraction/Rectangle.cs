﻿using System;

namespace Abstraction
{
    class Rectangle : Figure
    {
        //public double Width { get; set; }
        //public double Height { get; set; }

        //public Rectangle()
        //    : base(0, 0)
        //{
        //}
        public Rectangle(double width, double height)
            : base(width, height)
        {

        }
        //public override double Radius
        //{
        //    get
        //    {
        //        throw new NotImplementedException("Rectangle does not have Radius");
        //    }
        //    set
        //    {
        //        throw new NotImplementedException("Rectangle does not have Radius");
        //    }
        //}
        public override double CalcPerimeter()
        {
            double perimeter = 2 * (this.Width + this.Height);
            return perimeter;
        }
        public override double CalcSurface()
        {
            double surface = this.Width * this.Height;
            return surface;
        }
    }
}
