//Refactor the following examples to produce code with well-named identifiers in C#:
namespace Task2 // namespace only for consistency
{
    public class Human
    {
        public enum Sex
        {
            Male,
            Female,
        }

        public void CreateHuman(int humanAge)
        {
            var createdHuman = new Human();

            createdHuman.Age = humanAge;
            if (humanAge % 2 == 0)
            {
                createdHuman.Name = "Батката";
                createdHuman.Sex = Sex.Male;
            }
            else
            {
                createdHuman.Name = "Мацето";
                createdHuman.Sex = Sex.Female;
            }
        }

        public class Human
        {
            public Sex Sex { get; set; }

            public string Name { get; set; }

            public int Age { get; set; }
        }
    }
}