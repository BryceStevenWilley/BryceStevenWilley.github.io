class Kramdown::Converter::Html
  # You can override any function from this page:
  # https://kramdown.gettalong.org/rdoc/Kramdown/Converter/Html.html
  #def footnote_content()
  #  ""
  #end
    def convert_footnote(el, _indent)
        repeat = ''
        name = @options[:footnote_prefix] + el.options[:name]
        link_text = "[footnote %s]" # @options[:footnote_link_text] 
        if (footnote = @footnotes_by_name[name])
          number = footnote[2]
          repeat = ":#{footnote[3] += 1}"
        else
          number = @footnote_counter
          @footnote_counter += 1
          @footnotes << [name, el.value, number, 0]
          @footnotes_by_name[name] = @footnotes.last
        end
        link_text_num = sprintf(link_text, number)
        if (link_text == link_text_num)
          "<sup id=\"fnref:#{name}#{repeat}\" role=\"doc-noteref\">" \
            "<a href=\"#fn:#{name}\" class=\"footnote\" rel=\"footnote\">" \
            "#{link_text}#{number}</a></sup>"
        else
          "<sup id=\"fnref:#{name}#{repeat}\" role=\"doc-noteref\">" \
            "<a href=\"#fn:#{name}\" class=\"footnote\" rel=\"footnote\">" \
            "#{link_text_num}</a></sup>"
        end
    end
end