"""
Title: Fleeing Feline
Creators: Mei and Caroline
Description: A cat trying to escape their castle and dodge various enemies
"""

# game setup
scene.set_background_image(img("""
    ccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdc
    bcbbbbbbbbbbbbbbbbbdbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcdbdbbbbbbdbcbbbbbbbbdbbcbbddddddbbbcbbbbbbbbbbbcdbbbbbbbbbbcbbbbbbbbbbbcdddddddbbbcbbbbbbbbbbbcbbd
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbdbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcdbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcdbbbbbbbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbdbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbdbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    cccccccccccccccccccccccccccccccccccccccbddcccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccc
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbdbbdbbbbcbbbbbbbbbbbcbddbbbbdbbbcbbbbbbbbbbbcbbbbbbaaaaacbbbbbbdddbbcbbdbdbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcdbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbdbbbbddbcbbbbbbbbbbbcbbabbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbdbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbaaabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbcbbbbbbbbbbbcbbbbdbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcdbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbabbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbabbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcabbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbdbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbaabbbbbbbbbbdbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbdbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbcbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbddddddbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbcbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbccbbbbbbbbbbbcbbbbbdbbbbbcbbbbbbdbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbabbbbacbbbbbbbbbbbcbbbbbbbbbbbcbbbdbbbbdbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbdbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbabbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbdb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbaabbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbcbbbcccbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbcbbabbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbdbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbcbabcbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbabbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbcbccbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbcbbcbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbcbbcbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbddbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbdddbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbcacbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbdbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbcabcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcdbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcbbbcccbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcdbbdbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbc
    bbbbbcdbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbcccbbbbbbcbbbbbbbbbacbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbdddddbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcccabbcbbbbbbbbcacbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbaabbbbbbcbbbcccbbcbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbabcbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbcbbbbbbcbbbbbbbbbbcbbbbbbbbbcbc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbabbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbabbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbaabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbaaaabbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbccbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbccccbbbcbcbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbcccbbbcbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbcbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bbbbcbbbdddddbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbddcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbddbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbdbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbddbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbdbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbdbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbdbbbcbbbbbbbbbbcbbbbbbbbbcbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbcc
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbdbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbdbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbddbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbdbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbdbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbddddddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbdbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbdbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbaacbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbdbddddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbacbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbacbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
"""))
info.start_countdown(25)
game.runtime()
# Tilemap 
scene.set_tile_map(img("""
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ...................6......................6.....................................
    ...................6......................6.....................................
    ...................6......................6.....................................
    .....ee...ee.......6.e..11..e......88888..6.......................cccccc........
    ..............33...6.e..11..e......88888..6..........77......................ff9
    ..............33..............33...88888.........77..........aaa.............ff9
    ...e5e522e5...33.......e5e5...33...88888.....................aaa.............ff9
    ...e5e522e5...33.......e5e5...33...88888.....................aaa.............ff9
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44
"""))

#mirror
scene.set_tile(1, img("""
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
"""), True)
mirror = sprites.create(img("""
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ee9999999999999999999999999999ee
    ee9991991999999999999999999999ee
    ee9919919999919999999999999999ee
    ee9199199999199999999999999999ee
    ee9991999991999999999999999999ee
    ee9919999919999999999999999999ee
    ee9999999199999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999199999ee
    ee9999999999999999999991999999ee
    ee9999999999999999999919999999ee
    ee9999999999999999999199999999ee
    ee9999999999999999991999999999ee
    ee9999999999999999999999199999ee
    ee9999999999999999999991999999ee
    ee9999999999999999999919999999ee
    ee9999999999999999999199999999ee
    ee9999999999999999991999999999ee
    ee9999999999999999919999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
"""))
mirror.set_position(400, 79)

#oven
scene.set_tile(2, img("""
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
"""), True)
oven = sprites.create(img("""
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d11bb11bb111ffffffff111bb11bb11d
    d11bb11bb111ffffffff111bb11bb11d
    d111111111111111111111111111111d
    dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd
    ddd222222222ddddddd2222222222ddd
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d11cccccccccccccccccccccccccc11d
    d11cccccccccccccccccccccccccc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccff222222222222222222ffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccff222222222222222222ffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccff222222222222222222ffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11cccccccccccccccccccccccccc11d
    d11cccccccccccccccccccccccccc11d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    dddddddddddddddddddddddddddddddd
"""), SpriteKind.projectile)
oven.set_position(128, 128)
def on_hit_oven(sprite):
    game.over(False)
scene.on_hit_tile(SpriteKind.player, 2, on_hit_oven)

#fridge
scene.set_tile(3, img("""
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
"""), True)
fridge = sprites.create(img("""
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d1111111111111111111111111fff11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111122211111111111111f1f11d
    d1111111121211111111111111f1f11d
    d1111111122111111111111111f1f11d
    d1111111121211111111111111f1f11d
    d1111111122211111aaa111111f1f11d
    d1166611111111111a1a111111f1f11d
    d1161611111111111a11111111f1f11d
    d1166611111111111aaa111111f1f11d
    d1161611111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111fff11d
    d111111111111111111111111111111d
    dffffffffffffffffffffffffffffffd
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d1111111111111111111111111fff11d
    d1111111111111111111111111f1f11d
    d1111411411111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111411411111111111111111f1f11d
    d1111144111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111fff11d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    ffffffffffffffffffffffffffffffff
"""))
fridge.set_position(240, 112)

scene.set_tile(4, img("""
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
"""), True)

#Cabinet
scene.set_tile(5, img("""
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
"""), True)
scene.set_tile(14, img("""
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
"""), True)

#room separation
scene.set_tile(6, img("""
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
"""), True)

#library shelves
scene.set_tile(7, img("""
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 8 8 . . . 7 7 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 7 7 5 5 a a a .
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
"""), True)

#Shower
scene.set_tile(8, img("""
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
"""), True)
shower = sprites.create(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccdddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccdddddcccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddcccccaaaccccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccaaaaaaaaccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccaaaaaaaaccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdccccdddddcaaaaaaaaccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdccccddd9dddcaaaaaacdddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdccccddd9ddddd9ddd9999dddddddddddddddd99dddddddddddddddddddddddddddddddddddff
    fffdcccddddd9dddddddd9dddddddddddddd999999ddddddddddddddddddddddddddddddddddddff
    fffdcccddddd9dddddddd9ddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddff
    fffccccddddd99dddddddd9dddddddddddddddddddddd9ddddddddddddddddddddddddddddddddff
    fffccccdddddd9ddd9dddd99ddddddddddddddddddddd9ddddddddddddddddddd99dddddddddddff
    fffccccddddddddddd9dddddddddddddddddddddddddd9ddddddddddddd9dddddd99ddddddddddff
    fffccffffddddddddd9dddddddddddddddddddddddddd9ddddddddddddd9ddddddd9ddddddddddff
    fffcfffffdddddddddd9ddddddddddddddddddddddddd9ddddddddddddd9ddddddd9ddddddddddff
    fffcfffffddddddddddd9ddddddddddddddd9dddddddd9ddddddddddddd9ddddddddddddddddddff
    fffcfffffddddddddddd99dddddddddddddd99dddddd9dddddddddddddd9ddddddddddddddddddff
    fffcfffffdddddddddddd9ddddddddddddddd9dddddd9dddddddddddddddddddddddddddddddddff
    ffccfffffddddd9ddddddd9ddddddddddddddd9dddddddddddddddddddddddddddddddddddddddff
    ffccfffffddddd9ddddddd99dddddddddddddd9dddddddddddddddddddddddddddddddddddddddff
    ffccffffdddddd9d9dddddd9dd99dddddddddd9ddddddddddddddddddd9dddddddddddddddddddff
    ffcccccddddddd9dddddddddddd999dddddddd9ddddddddddddddddddd9dddddddddddddddddddff
    ffcccccddddddd9dddddddddddddd9dddddddddddddddddddddddddddd9dddddddddddddddddddff
    ffcccccddddddd9ddddddddddddd9999ddddddddddddddddddddddddd99dddddddddddddddddddff
    ffcccccddddddd9d9dddddddddddddddddddddddddddddddddddddddd9ddddddd9ddddddddddddff
    ffcccccddddddd9d9dddddddddddddddddddddddddddddddddddddddd9ddddddd9ddddddddddddff
    ffcccccddddddddd9ddddddddddddddddddddddddddddddddddddddd9dddddddd9ddddddddddddff
    ffcccccddddddddddddd9dddddddddddddddddddddddddddddddddddddddddddd9ddddddddddddff
    ffcccccddddddddddddd9ddddddddddddddddd99ddddddddddddddddddddddddd9ddddddddddddff
    ffcccccdddddddddddddd9dddddddddddddddd9d999ddddddddddddddddddddd9dddddddddddddff
    ffccccccddddddddddddd9dddddddddddddddd9dddd99ddddddddddddddddddd9dddddddddddddff
    ffccccccdddddddddddddd99dddddddddddddd9ddddd999dddddddddddddddd9ddddddddddddddff
    ffccccccddddddddd9dddddd999ddddddddddd9dddddddddddddddddddddddddddddddddddddddff
    fffcccccddddddddd99ddd9dddd999dddddddd9dddddddddddddddddddddddddddddddddddddddff
    fffcccccdddddddddd9dddd9dddddd99ddddddddddddddddd9ddddddddddddddddddddddddddddff
    fffddddddddddddddd9dddd9ddddddddddddddddddddddd999ddddddddddddddddddddddddddddff
    fffddddddddddddddd9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddd9dddddddddddddddddff
    fffddddddddddddddd9dddddddd9dddddddddd9dddddddddddddddddddd99dddddddddddddddddff
    fffddddddddddddddd9ddddddddd9ddddddddd9ddddddddddddddddddd99ddddddddddddddddddff
    fffddddddddddddddddddddddddd99dddddddd9dddddddddddddddddddddddddddddddddddddddff
    fffddddddddddddddddddddddddddd9ddddddd9dddd9ddddddddddddddddddddddddddddddddddff
    fffddddddddddddddddddddddddddd9ddddddd9d9999dddddddddddddddd9dddddddddddddddddff
    fffddddddddddddddddddddddddddd9ddddd9999dddd9dddddddddddddddd99dddddddddddddddff
    fffdddddddddddddddddddddddddddd9ddddddddddddd9dddddddddddddddd9dddddddddddddddff
    fffddddddddddddddddddddddddddddddddddddddddddd99ddddddddddddddddddddddddddddddff
    fffddddddddddddddddd9d9999dddddddddddddddddddddd9ddddddddddddddddd9dddddddddddff
    fffdddddddddddddddddd9ddddddddddddddddddddddddddd99ddddddddddddddd99ddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dddddddddff
    fffdddddddddddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddd999ddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
shower.set_position(600, 104)

#Toilet
scene.set_tile(3, img("""
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
"""), True)
toilet = sprites.create(img("""
    ..11111111111111111111111111111.
    ..11111111111111111111111111111.
    4441111111111111111111111111111.
    4441111111111111111111111111111.
    4441111111111111111111111111111.
    4411111111111111111111111111111.
    4411111111111111111111111111111.
    4411111111111111111111111111111.
    ..11111111111111111111111111111.
    ..11111111111111111111111111111.
    ..dddd1111111111111111111111111.
    ......ddddddddddddddddddddd.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......dd1111111111111111111.....
    ......dd1111111111111111111.....
    ......ddd111111111111111111.....
    ......ddd111111111111111111.....
    ......ddddd1111111111111111.....
    ......ddddddd11111111111111.....
    ......dddddddddddddddddddd......
    .444444444444444444444444444444.
    .444444444444444444444444444444.
    .444444444444444444444444444444.
    .444444444444444444444444444444.
    ...dddddddddddddddddddddddddd...
    ...11111111111111111111111111...
    ...11111111111111111111111111...
    ...d1111111111111111111111111...
    ....d11111111111111111111111....
    .....d111111111111111111111.....
    ......d1111111111111111111......
    .......d11111111111111111.......
    .........dddddddddddddd.........
    .........dddddddddddddd.........
    .........dddddddddddddd.........
    ......d1111111111111111111......
    ......d1111111111111111111......
    ......d1111111111111111111......
    .....dd11111111111111111111.....
    .....dd11111111111111111111.....
    ....ddddd1111111111111111111....
    ....dddddd111111111111111111....
    ....dddddd111111111111111111....
    ....dddddddddddddddddddd1111....
"""))
toilet.set_position(495, 120)

#bookshelf
scene.set_tile(10, img("""
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e 7 7 7 e e e e e 2 2 2
    5 5 5 e e 7 6 7 e e e 4 4 2 2 2
    5 4 5 a a 7 6 7 9 9 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 5 5 a a 7 7 7 9 9 9 4 4 2 2 2
    f f f f f f f f f f f f f f f f
    e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f
"""), True)

scene.set_tile(11, img("""
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
"""), True)

scene.set_tile(12, img("""
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
"""), True)

scene.set_tile(13, img("""
    c 3 c c c c c c c 3 c c c c c c
    c 3 c c c c c c c 3 c c c c c c
    c 3 c c c c c c c 3 c c c c c c
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    c c c c c 3 c c c c c c c 3 c c
    c c c c c 3 c c c c c c c 3 c c
    c c c c c 3 c c c c c c c 3 c c
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    c 3 c c c c c c c 3 c c c c c c
    c 3 c c c c c c c 3 c c c c c c
    c 3 c c c c c c c 3 c c c c c c
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    c c c c c 3 c c c c c c c 3 c c
    c c c c c 3 c c c c c c c 3 c c
    c c c c c 3 c c c c c c c 3 c c
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
"""), True)

#Door
scene.set_tile(15, img("""
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
"""))
scene.set_tile(9, img("""
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
"""))
scene.set_tile(4, img("""
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
"""), True)
#player images
cat = sprites.create(img("""
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . c f . . . . . f c .
    . . . . . . . . f 1 f . . . f 1 f .
    . . e e f . . . c 3 1 f f f 1 3 f .
    . f d d d f . . f 1 1 d d d 1 1 c .
    . f d f e . . f d 1 1 1 d 1 1 1 d f
    . f d f . . . f 1 1 c 1 1 1 1 c 1 f
    . e d d f e e c 1 1 1 c 1 1 c 1 1 c
    . f d d 1 1 1 1 f 1 1 1 3 3 1 1 f .
    . f d 1 1 1 1 1 1 f f c f f f f . .
    . f 1 1 1 d d 1 1 d d 1 f . . . . .
    . f 1 1 e f f f f f 1 1 f . . . . .
    . f d d f . . . . . 1 1 f . . . . .
    . . f f . . . . . . f f . . . . . .
"""), SpriteKind.player)
cat_default = (img("""
    . . . . . . . . . . . . . . . .
    . . . . . . c f . . . . . f c .
    . . . . . . f 1 f . . . f 1 f .
    . . f f . . c 3 1 f f f 1 3 f .
    . f d d f . f 1 1 d d d 1 1 c .
    f d d f . f d 1 1 1 d 1 1 1 d f
    f d f . . f 1 1 c 1 1 1 1 c 1 f
    f d d f f c 1 1 1 c 1 1 c 1 1 c
    f d d 1 1 1 f 1 1 1 3 3 1 1 f .
    f d 1 1 d d f f f c f f f f . .
    f 1 1 1 d 1 f 1 1 1 d d 1 f . .
    f 1 d f f f f 1 1 f f 1 1 f . .
    f 1 d f . . f d d . . d 1 f . .
    . f f . . . . f f . . f f . . .
"""))
cat_right = (img("""
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . c f . . . . . f c .
    . . . . . . . . f 1 f . . . f 1 f .
    . . e e f . . . c 3 1 f f f 1 3 f .
    . f d d d f . . f 1 1 d d d 1 1 c .
    . f d f e . . f d 1 1 1 d 1 1 1 d f
    . f d f . . . f 1 1 c 1 1 1 1 c 1 f
    . e d d f e e c 1 1 1 c 1 1 c 1 1 c
    . f d d 1 1 1 1 f 1 1 1 3 3 1 1 f .
    . f d 1 1 1 1 1 1 f f c f f f f . .
    . f 1 1 1 d d 1 1 d d 1 f . . . . .
    . f 1 1 e f f f f f 1 1 f . . . . .
    . f d d f . . . . . 1 1 f . . . . .
    . . f f . . . . . . f f . . . . . .
"""))
cat_left = (img("""
    . . . . . . . . . . . . . . . . . .
    . c f . . . . . f c . . . . . . . .
    . f 1 f . . . f 1 f . . . . . . . .
    . f 3 1 f f f 1 3 f . . . f e e . .
    . c 1 1 d d d 1 1 c . . f d d d f .
    f d 1 1 1 d 1 1 1 d f . . e f d f .
    f 1 c 1 1 1 1 c 1 1 f . . . f d f .
    f 1 1 c 1 1 c 1 1 1 c e e f d d e .
    . f 1 1 3 3 1 1 1 f 1 1 1 1 d d f .
    . . f f f f f f f 1 1 1 1 1 1 d f .
    . . . . . f 1 d d 1 1 d d 1 1 1 f .
    . . . . . f 1 1 1 f f f f e 1 1 f .
    . . . . . f 1 1 e . . . . f d d f .
    . . . . . . f f . . . . . . f f . .
"""))
cat_left_jump = (img("""
    . c f . . . . . f c . . . . . . . . .
    . f 1 f . . . f 1 f . . . . . . . . .
    . f 3 1 f f f 1 3 f . . . . . . f f .
    . c 1 1 d d d 1 1 c . . . . . c d d c
    f d 1 1 1 d 1 1 1 d f . . . f d d f .
    f 1 c 1 1 1 1 c 1 1 f . . . f d f . .
    c 1 1 c 1 1 c 1 1 1 c f f f d d f . .
    . f 1 1 3 3 1 1 d f d d 1 1 1 d d f .
    . . c f f f f f f 1 1 1 1 1 1 1 d f .
    . . . c d d 1 1 1 1 1 1 1 d 1 1 1 f .
    . . f 1 1 1 f 1 d c f f c c 1 1 1 1 f
    . f d 1 f f . f f . . . . . f f 1 d d
    . f 1 c . . . . . . . . . . . . f f d
    . . f . . . . . . . . . . . . . . . c
"""))
cat_right_jump = (img("""
    . . . . . . . . . c f . . . . . f c .
    . . . . . . . . . f 1 f . . . f 1 f .
    . f f . . . . . . c 3 1 f f f 1 3 f .
    c d d c . . . . . f 1 1 d d d 1 1 c .
    . f d d f . . . f d 1 1 1 d 1 1 1 d f
    . . f d f . . . f 1 1 c 1 1 1 1 c 1 f
    . . f d d f f f c 1 1 1 c 1 1 c 1 1 c
    . f d d 1 1 1 d d f 1 1 1 3 3 1 1 f .
    . f d 1 1 1 1 1 1 1 f f c f f f c . .
    . f 1 1 1 d 1 1 1 1 1 1 1 d d c . . .
    f 1 1 1 1 c c f f c d 1 f 1 1 1 f . .
    d d 1 f f . . . . . f f . f f 1 d f .
    d f f . . . . . . . . . . . . c d f .
    c . . . . . . . . . . . . . . . f . .
"""))

# player setup

def on_update3():
    if controller.dx() < 0 and controller.A.is_pressed():
        cat.set_image(cat_left_jump)
    elif controller.dx() > 0 and controller.A.is_pressed():
        cat.set_image(cat_right_jump)
    elif controller.dx() < 0:
        cat.set_image(cat_left)
    elif controller.dx() > 0:
        cat.set_image(cat_right)
    else:
        cat.set_image(cat_default)

game.on_update(on_update3)
scene.camera_follow_sprite(cat)
cat.ay = 300
tiles.place_on_tile(cat, tiles.get_tile_location(1, 8))

#Player controls
controller.move_sprite(cat, 100, 0)
double_jump = True
def jump():
    global double_jump
    if double_jump:
        cat.vy = -140
        double_jump = cat.is_hitting_tile(CollisionDirection.BOTTOM)
controller.A.on_event(ControllerButtonEvent.PRESSED, jump)
def on_update():
    global double_jump
    if cat.is_hitting_tile(CollisionDirection.Bottom):
        double_jump = True
game.on_update(on_update)



# powerup one
powerup1 = sprites.create(img("""
    . . . 5 5 . . . 5 . . . . . . .
    5 . . . 5 . . . 5 5 . . . . 5 5
    5 5 . . 5 . . . . 5 . . . 5 5 .
    . . . . 4 4 4 4 . . . . 5 5 . .
    . . 4 4 4 4 4 4 4 . . . . . . .
    . e 4 4 4 4 4 4 4 4 . . . . . .
    e 4 4 4 4 4 4 4 4 4 4 . . 1 . .
    e 4 4 4 4 4 4 4 4 4 1 1 1 1 . 5
    e 4 4 4 4 4 4 4 4 4 4 d d 1 . 5
    . e 4 4 4 4 4 4 4 4 e . . . . .
    . . e e e e e e e e . . . 5 5 .
    . 5 5 . . 5 . . . . 5 . . . . 5
    5 5 . . . 5 5 . . . 5 5 . . . .
    5 . . . . . 5 . . . . 5 5 . . .
    . . . . . . 5 . . . . . 5 . . .
    . . . . . . . . . . . . . . . .
"""), SpriteKind.food)
tiles.place_on_tile(powerup1, tiles.get_tile_location(10, 6))

def on_overlap(sprite, otherSprite):
    otherSprite.destroy(effects.cool_radial, 100)
    controller.move_sprite(cat, 150, 0)
    def on_debounce():
        controller.move_sprite(cat, 100, 0)
    timer.debounce("action", 5000, on_debounce)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)

# enemies setup
def on_hit_tile(sprite):
    game.over()
scene.on_hit_tile(SpriteKind.player, 2, on_hit_tile)

#dog images
dog = sprites.create(img("""
    . . . . . . 4 4 4 . . . . 4 4 4 . .
    . . . . . 4 5 5 5 e . . e 5 5 5 4 .
    . . . . 4 5 5 5 5 5 4 4 5 5 5 5 5 4
    . . . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4
    . . e e 4 5 4 4 5 5 5 5 5 5 4 4 5 4
    . 4 5 5 e 4 e 5 5 5 5 5 5 5 5 e 4 .
    4 5 5 e . . e 5 5 f 5 5 5 f 5 e . .
    e 5 e . . . 4 5 5 5 5 f 5 5 5 e . .
    e 5 e 4 e e 4 5 5 5 f 5 f 5 5 4 . .
    e 5 5 5 5 5 5 e 5 5 5 5 5 5 e . . .
    e 5 5 5 5 5 5 5 e e e 4 4 e . . . .
    e 5 5 5 5 5 5 5 5 5 5 e . . . . . .
    e 5 5 5 e e e e 5 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e e e e . . . . e e e e . . . . . .
"""))
dog_right = (img("""
    . . . . . . 4 4 4 . . . . 4 4 4 . .
    . . . . . 4 5 5 5 e . . e 5 5 5 4 .
    . . . . 4 5 5 5 5 5 4 4 5 5 5 5 5 4
    . . . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4
    . . e e 4 5 4 4 5 5 5 5 5 5 4 4 5 4
    . 4 5 5 e 4 e 5 5 5 5 5 5 5 5 e 4 .
    4 5 5 e . . e 5 5 f 5 5 5 f 5 e . .
    e 5 e . . . 4 5 5 5 5 f 5 5 5 e . .
    e 5 e 4 e e 4 5 5 5 f 5 f 5 5 4 . .
    e 5 5 5 5 5 5 e 5 5 5 5 5 5 e . . .
    e 5 5 5 5 5 5 5 e e e 4 4 e . . . .
    e 5 5 5 5 5 5 5 5 5 5 e . . . . . .
    e 5 5 5 e e e e 5 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e e e e . . . . e e e e . . . . . .
"""))
dog_left = (img("""
    . . 4 4 4 . . . . 4 4 4 . . . . . .
    . 4 5 5 5 e . . e 5 5 5 4 . . . . .
    4 5 5 5 5 5 4 4 5 5 5 5 5 4 . . . .
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . . .
    4 5 4 4 5 5 5 5 5 5 4 4 5 4 e e . .
    . 4 e 5 5 5 5 5 5 5 5 e 4 e 5 5 4 .
    . . e 5 f 5 5 5 f 5 5 e . . e 5 5 4
    . . e 5 5 5 f 5 5 5 5 4 . . . e 5 e
    . . 4 5 5 f 5 f 5 5 5 4 e e 4 e 5 e
    . . . e 5 5 5 5 5 5 e 5 5 5 5 5 5 e
    . . . . e 4 4 e e e 5 5 5 5 5 5 5 e
    . . . . . . e 5 5 5 5 5 5 5 5 5 5 e
    . . . . . . e 5 5 5 e e e e 5 5 5 e
    . . . . . . e 5 5 e . . . . e 5 5 e
    . . . . . . e 5 5 e . . . . e 5 5 e
    . . . . . . e e e e . . . . e e e e
"""))
tiles.place_on_tile(dog, tiles.get_tile_location(49, 8))
dog.set_kind(SpriteKind.enemy)
dog.ay = 700

def on_hit_tile2(cat):
    dog.follow(cat, 85)
scene.on_hit_tile(SpriteKind.player, 13 , on_hit_tile2)

def on_overlap2(sprite, otherSprite):
    game.over()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap2)


# win/lose effect
def on_outside(sprite):
    game.over(True)
scene.on_hit_tile(SpriteKind.player, 4, on_outside)