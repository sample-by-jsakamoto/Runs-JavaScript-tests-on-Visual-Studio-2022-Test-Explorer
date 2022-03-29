using NUnit.Framework;

namespace RazorClassLibrary1.Test;

public class DogClassTests
{
    [Test]
    public void Bark_Test()
    {
        var dog = new DogClass();
        Assert.AreEqual("Bow-wow", dog.Bark());
    }
}