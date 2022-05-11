using Microsoft.EntityFrameworkCore;
using ProGearAPI.Models.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProGearAPI.Test
{
    public class ProGearContextMock
    {
        int counter = 0;
        public ProGearContext MockSetup()
        {
            var options = new DbContextOptionsBuilder<ProGearContext>()
                .UseInMemoryDatabase(databaseName: "ProGearMockDB")
               .Options;
            var context = new ProGearContext(options);
            if (counter == 0)
            {
                context.Products.Add(new Product
                {
                    ProductId = 1,
                    CatId = 1,
                    ProductName = "Test Product 1",
                    ProductDetails = "This is Test Product 1 - ABC",
                    ProductStock = 1,
                    ProductPrice = 5.0
                });
                context.Products.Add(new Product
                {
                    ProductId = 2,
                    CatId = 2,
                    ProductName = "Test Product 2",
                    ProductDetails = "This is Test Product 2 - XYZ",
                    ProductStock = 2,
                    ProductPrice = 6.0
                });
                context.SaveChanges();

                counter++;
            }
            return context;
        }
        public ProGearContext checkDBMockData(ProGearContext context1)
        {
            if (context1 == null)
            {
                context1.Products.Add(new Product
                {
                    ProductId = 1,
                    CatId = 1,
                    ProductName = "Test Product 1",
                    ProductDetails = "This is Test Product 1 - ABC",
                    ProductStock = 1,
                    ProductPrice = 5.0
                });
                context1.Products.Add(new Product
                {
                    ProductId = 2,
                    CatId = 2,
                    ProductName = "Test Product 2",
                    ProductDetails = "This is Test Product 2 - XYZ",
                    ProductStock = 2,
                    ProductPrice = 6.0
                });
                context1.SaveChanges();
            }
            return context1;

        }

    }
}
