require 'cgi'

module Jekyll
  class SongTable < Liquid::Tag
    @song_name = nil
    @album_name = nil
    @artist = nil
    @img_id = nil
    @song_url = nil
    @location = nil

    def initialize(tag_name, text, tokens)
      super
      @location = :spotify
      if text=~ /--bandcamp/i
        @location = :bandcamp
      end
      if text=~ /--tidal/i
        @location = :tidal
      end
      if text =~ /--song="([^"]+)"/i
        @song_name = text.match(/--song="([^"]+)"/i)[1]
      end
      if text =~ /--album="([^"]+)"/i
        @album = text.match(/--album="([^"]+)"/i)[1]
      end
      if text =~ /--artist="[^"]+"/i
        @artist = text.match(/--artist="([^"]+)"/i)[1]
      end
      if text =~ /--img_id=(\S+)/i
        @img_id = text.match(/--img_id=(\S+)/i)[1]
      end
      if text =~ /--song_url=(\S+)/i
        @song_url = text.match(/--song_url=(\S+)/i)[1]
      end
      if text =~ /--song_url=(\S+)/i
        @song_url = text.match(/--song_url=(\S+)/i)[1]
      end
    end

    def render(context)
      source = "<tr>\n"
      img_alt = if @album_name != nil
        "The album cover for #{@artist}'s #{@album_name}"
      else
        "The single cover for #{@song_name}, by #{@artist}"
      end
      if @location == :spotify
        if @img_id != nil
          source += %{ <td><img src="https://i.scdn.co/image/#{@img_id}" alt="#{img_alt}" height="71" width="71"></td>\n}
        else
          source += %{ <td><img src="/assets/spotify-logo.png" alt="Spotify's Logo" height="71" width="71"></td>\n}
        end
        source += "  <td>#{@song_name}</td>\n"
        if @song_url != nil
          source += %{  <td><a href="https://open.spotify.com/#{@song_url}">#{@artist}</a></td>\n }
        else
          source += %{  <td><a href="https://open.spotify.com/search/#{@artist} #{@song_name}">#{@artist}</a></td>\n }
        end
      elsif @location == :bandcamp
        source += %{  <td><img src="#{@img_id}" alt="The album cover for #{@artist}'s #{@album_name}" height="71" width="71"></td>\n}
        source += "  <td>#{@song_name}</td>\n"
        if @song_url != nil
          source += %{  <td><a href="#{@song_url}">#{@artist}</a></td>\n}
        else
          source += %{  <td><a href="https://bandcamp.com/search?q=#{CGI.escape(@artist + " " + @song_name)}">#{@artist}</a></td>\n}
        end
      elsif @location == :tidal
        source += %{  <td><img src="#{@img_id}" alt="The album cover for #{@artist}'s #{@album_name}" height="71" width="71"></td>\n}
        source += "  <td>#{@song_name}</td>\n"
        if @song_url != nil
          source += %{  <td><a href="#{@song_url}">#{@artist}</a></td>\n}
        else
          source += %{  <td><a href="https://tidal.com/search?q=#{CGI.escape(@artist + " " + @song_name)}">#{@artist}</a></td>\n}
        end
      end
      source += "</tr>\n"
      source
    end
  end
end

Liquid::Template.register_tag("song_table", Jekyll::SongTable)