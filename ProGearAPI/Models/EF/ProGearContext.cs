using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class ProGearContext : DbContext
    {
        public ProGearContext()
        {
        }

        public ProGearContext(DbContextOptions<ProGearContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<PaidOrder> PaidOrders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=DESKTOP-TDTK0RJ\\KRISSQL;Initial Catalog=ProGear;Persist Security Info=True;User ID=sa;Password=rev511");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart");

                entity.Property(e => e.CartId).HasColumnName("cartID");

                entity.Property(e => e.Total).HasColumnName("total");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Cart__userID__22751F6C");
            });

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.Property(e => e.InvoiceId).HasColumnName("invoiceID");

                entity.Property(e => e.Total).HasColumnName("total");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Invoices__userID__29221CFB");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId).HasColumnName("orderID");

                entity.Property(e => e.CartId).HasColumnName("cartID");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Orders__cartID__2645B050");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Orders__productI__25518C17");
            });

            modelBuilder.Entity<PaidOrder>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.InvoiceId).HasColumnName("invoiceID");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Invoice)
                    .WithMany()
                    .HasForeignKey(d => d.InvoiceId)
                    .HasConstraintName("FK__PaidOrder__invoi__2BFE89A6");

                entity.HasOne(d => d.Product)
                    .WithMany()
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__PaidOrder__produ__2B0A656D");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.ProductCat)
                    .IsUnicode(false)
                    .HasColumnName("productCat");

                entity.Property(e => e.ProductDetails)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("productDetails");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("productName");

                entity.Property(e => e.ProductPrice).HasColumnName("productPrice");

                entity.Property(e => e.ProductStock).HasColumnName("productStock");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email, "UQ__Users__AB6E616473F40955")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
