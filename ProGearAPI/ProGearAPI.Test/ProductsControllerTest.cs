using Microsoft.AspNetCore.Mvc;
using ProGearAPI.Controllers;
using ProGearAPI.Models.EF;
using System;
using System.Collections.Generic;
using Xunit;

namespace ProGearAPI.Test
{
    public class ProductControllerTest
    {
        static ProGearContext _nuDB = new ProGearContextMock().MockSetup();
        // ARRANGE
        [Fact]
        public void GetProductlist_returnOkObject()
        {
            // ARRANGE
            ProductsController controller = new ProductsController();
            controller.dbProGear = _nuDB;

            // ACT
            var result = controller.GetProductlist();

            // ASSERT
            Assert.IsType<OkObjectResult>(result);

        }

        [Fact]
        public void GetProductlist_returnLINQdata()
        {
            // ARRANGE
            ProductsController controller = new ProductsController();
            controller.dbProGear = _nuDB;

            // ACT
            var result = controller.GetProductlist() as OkObjectResult;

            // ASSERT
            var prodList = Assert.IsType<List<Product>>(result.Value);
            Assert.Equal(1, prodList[0].ProductId);
            Assert.Equal(1, prodList[0].CatId);
            Assert.Equal("Test Product 1", prodList[0].ProductName);
            Assert.Equal("This is Test Product 1 - ABC", prodList[0].ProductDetails);
            Assert.Equal(1, prodList[0].ProductStock);
            Assert.Equal(5.0, prodList[0].ProductPrice);

        }

        [Fact]
        public void GetCatlist_returnOkObject()
        {
            // ARRANGE
            ProductsController controller = new ProductsController();
            controller.dbProGear = _nuDB;
            int catId = 1;

            // ACT
            var result = controller.GetCatList(catId) as OkObjectResult;

            // ASSERT
            Assert.IsType<OkObjectResult>(result);

        }

        [Fact]
        public void GetCatlist_returnLINQdata()
        {
            // ARRANGE
            ProductsController controller = new ProductsController();
            controller.dbProGear = _nuDB;
            int catId = 2;

            // ACT
            var result = controller.GetCatList(catId) as OkObjectResult;

            // ASSERT
            var prodList = Assert.IsType<List<Product>>(result.Value);
            Assert.Equal(2, prodList[0].ProductId);
            Assert.Equal(2, prodList[0].CatId);
            Assert.Equal("Test Product 2", prodList[0].ProductName);
            Assert.Equal("This is Test Product 2 - XYZ", prodList[0].ProductDetails);
            Assert.Equal(2, prodList[0].ProductStock);
            Assert.Equal(6.0, prodList[0].ProductPrice);

        }

        [Fact]
        public void Search_returnOkObject()
        {
            // ARRANGE
            ProductsController controller = new ProductsController();
            controller.dbProGear = _nuDB;
            string searchTerm = "2";

            // ACT
            var result = controller.Search(searchTerm) as OkObjectResult;

            // ASSERT
            Assert.IsType<OkObjectResult>(result);

        }

        [Fact]
        public void Search_returnLINQdata()
        {
            // ARRANGE
            ProductsController controller = new ProductsController();
            controller.dbProGear = _nuDB;
            string searchTerm = "2";

            // ACT
            var result = controller.Search(searchTerm) as OkObjectResult;

            // ASSERT
            var prodList = Assert.IsType<List<Product>>(result.Value);
            Assert.Equal(2, prodList[0].ProductId);
            Assert.Equal(2, prodList[0].CatId);
            Assert.Contains(searchTerm, prodList[0].ProductName);
            //Assert.Equal("This is Test Product 2 - XYZ", prodList[0].ProductDetails);
            Assert.Equal(2, prodList[0].ProductStock);
            Assert.Equal(6.0, prodList[0].ProductPrice);

        }
    }
}
