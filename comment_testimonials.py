import re
import glob

def comment_testimonials_in_file(filename):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    # Regex to match <section class="testimonials"> ... </section>
    pattern = re.compile(
        r'(<section\s+class="testimonials"[^>]*>.*?</section>)',
        re.DOTALL | re.IGNORECASE
    )

    def replacer(match):
        block = match.group(1)
        # Only comment if not already commented
        if not block.strip().startswith("<!--"):
            return f"<!--\n{block}\n-->"
        return block

    new_content, count = pattern.subn(replacer, content)

    if count > 0:
        with open(filename, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Commented testimonials in: {filename}")

if __name__ == "__main__":
    for html_file in glob.glob("*.html"):
        comment_testimonials_in_file(html_file)
