using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecification: BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams productParams) : base(x =>
            (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
            (!productParams.BarndId.HasValue || x.ProductBrandId == productParams.BarndId) &&
            (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId))
        {
        }
    }
}
