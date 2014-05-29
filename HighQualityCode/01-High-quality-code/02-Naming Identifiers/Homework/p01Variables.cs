//Refactor the following examples to produce code with well-named C# identifiers:

namespace p01Variables
{
    using System;

    public static class VariablesOperations
    {
        private const int MAX_COUNT = 6;

        public static void Main()
        {
            var instance = new VariableVisualisator();
            instance.PrintVariableOnConsole(true);
        }

        private class VariableVisualisator
        {
            public void PrintVariableOnConsole(bool inputVariable)
            {
                string inputVariableAsString = inputVariable.ToString();
                Console.WriteLine(inputVariableAsString);
            }
        }
    }
}
