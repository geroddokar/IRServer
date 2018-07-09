using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace IRServer.Models
{
    public static class PagingHelpers
    {
        public static MvcHtmlString PageLinks(
            this HtmlHelper html,
            PagingInfo pagingInfo,
            Func<int, string> pageUrl)
        {
            StringBuilder result = new StringBuilder();
            TagBuilder tagUl = new TagBuilder("ul");
            tagUl.AddCssClass("pagination");
            for (int i = 1; i <= pagingInfo.TotalPages; i++)
            {
                TagBuilder tagLi = new TagBuilder("li");
                tagLi.AddCssClass("page-item");
                TagBuilder tag = new TagBuilder("button"); // Construct an <a> tag
                tag.MergeAttribute("href", pageUrl(i));
                tag.InnerHtml = i.ToString();
                tag.AddCssClass("page-link");
                if (i == pagingInfo.CurrentPage)
                    tagLi.AddCssClass("disabled");
                tagLi.InnerHtml = tag.ToString();
                tagUl.InnerHtml += tagLi.ToString();
            }
            result.Append(tagUl);
            return MvcHtmlString.Create(result.ToString());
        }


        public static string ResultDescription(List<string> value)
        {
            StringBuilder result = new StringBuilder();
            TagBuilder tagUl = new TagBuilder("ol");
            foreach (var item in value)
            {
                TagBuilder tagLi = new TagBuilder("li");
                tagLi.SetInnerText(item);
                tagUl.InnerHtml += tagLi.ToString();
            }
            result.Append(tagUl);
            return result.ToString();
        }
    }


}