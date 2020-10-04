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

# Tilemap 
scene.set_tile_map(img("""
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ...................6......................6.....................................
    ...................6......................6.....................................
    ...................6......................6.....................................
    .....ee...ee.......6.e..11..e......88888..6.......................cccccc........
    ..............33...6.e..11..e......88888..6..........77..5...aaa.............fff
    ..............33..............99...88888.........77..77......aaa.............fff
    ...eeee22ee...33.......eeee...99...88888.........77..........aaa.............fff
    ...eeee22ee...33.......eeee...99...88888.....................aaa.............fff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
"""))
# scene.set_tile(1, img("""
#     ................................
#     ................................
#     ................................
#     ...........eeeeeeeeee...........
#     .........ee1111111111ee.........
#     ........e11111111111111e........
#     ........e11111111111111e........
#     .......e1111111111111111e.......
#     .......e1111111111111111e.......
#     ......e111111111111111111e......
#     ......e111111111111111111e......
#     .....e11111111111111111111e.....
#     .....e11111111111111111111e.....
#     .....e11111111111111111111e.....
#     ....e1111111111111111111111e....
#     ....e1111111111111111111111e....
#     ....e1111111111111111111111e....
#     ....e1111111111111111111111e....
#     ....e1111111111111111111111e....
#     .....e11111111111111111111e.....
#     .....e11111111111111111111e.....
#     .....e11111111111111111111e.....
#     ......e111111111111111111e......
#     ......e111111111111111111e......
#     .......e1111111111111111e.......
#     .......e1111111111111111e.......
#     ........e11111111111111e........
#     ........e11111111111111e........
#     .........ee1111111111ee.........
#     ...........eeeeeeeeee...........
#     ................................
#     ................................
# """), True)
scene.set_tile(1, img("""
    ..ccccc....333.....333.....333...ccccc....
    .c33b33c..39993...39993...39993.c33b33c...
    c3b33bb3c3999993339999933399999c3bb33b3c..
    c33b33b3c9911199999111999991119c3b33b33c..
    cb33b33bc9199919991999199919991cb33b33bc..
    c3b33bbbcb99999111999991119999bcbbb33b3c..
    c3bb3bbd1b11111999111119991111b1dbb3bb3c..
    .c33bbd1b1111111111111111111111b1dbb33c...
    ..cccc1b111111111111111111111111b1cccc....
    .3991bb11111111111111111111111111bb993....
    399199111111111111111111111111111191993...
    3991991111111111111111111111111111991993..
    3991991111111111111111111111111111991993..
    .399191111111111111111111111111111991993..
    ..3991911111111111111111111111111191993...
    ..399191111111111111111111111111191993....
    ..399191111111111111111111111111191993....
    .3991911111111111111111111111111191993....
    399199111111111111111111111111111191993...
    3991991111111111111111111111111111991993..
    3991991111111111111111111111111111991993..
    .399191111111111111111111111111111991993..
    ..3991911111111111111111111111111191993...
    ..399191111111111111111111111111191993....
    ..399191111111111111111111111111191993....
    .3991911111111111111111111111111191993....
    399199111111111111111111111111111191993...
    3991991111111111111111111111111111991993..
    3991991111111111111111111111111111991993..
    .399191111111111111111111111111111991993..
    ..699bb11111111111111111111111111bb1993...
    ..cccc1b111111111111111111111111b1cccc....
    .c33bbd1b1111111111111111111111b1dbb33c...
    c3bb3bbd1b11119991111199911111b1dbb3bb3c..
    c3b33bbbcb99991119999911199999bcbbb33b3c..
    cb33b33bc1999199919991999199919cb33b33bc..
    c33b33b3c9111999991119999911199c3b33b33c..
    c3b33bb3c9999933399999333999993c3bb33b3c..
    .c33b33c.39993...39993...39993..c33b33c...
    ..ccccc...333.....333.....333....ccccc....
    ..........................................
    ..........................................
"""), True)
scene.set_tile(2, img("""
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
"""), True)
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
scene.set_tile(6, img("""
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
"""), True)
scene.set_tile(7, img("""
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
"""), True)
scene.set_tile(8, img("""
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
"""), True)
scene.set_tile(9, img("""
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
"""), True)
scene.set_tile(10, img("""
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
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
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
"""), True)
scene.set_tile(13, img("""
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    d 1 d d d d d d d 1 d d d d d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    d d d d d 1 d d d d d d d 1 d d
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
"""), True)
scene.set_tile(14, img("""
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeefeefffeeeeeeeeeeee
    eeeeeeeeeeeeefffeefeefffeeeeeeeeeeee
    eeeeeeeeeeeeefffeefeefffeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeee
"""), True)
scene.set_tile(15, img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffdddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddfff
    fffffdddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddfff
    fffffdddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddfff
    fffffdddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddfff
    fffffdddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddfff
    fffffdddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))

# player setup
cat = sprites.create(img("""
    . . . . . . . . . . . . . .
    e e e . . . . e e e . . . .
    c d d c . . c d d c . . . .
    c b d d f f d d b c . . . .
    c 3 b d d b d b 3 c . . . .
    f b 3 d d d d 3 b f . . . .
    e d d d d d d d d e . . . .
    e d f d d d d f d e b f b .
    f d d f d d f d d f f d f .
    f b d d b b d d 2 b f d f .
    . f 2 2 2 2 2 2 d b d b f .
    . f d d d d d d d f f f . .
    . f d b d f f f d f . . . .
    . . f f f f . . f f . . . .
"""), SpriteKind.player)
scene.camera_follow_sprite(cat)
cat.ay = 300
tiles.place_on_tile(cat, tiles.get_tile_location(0, 8))

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
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . a a a a . . . . . . .
    . . . . a a a a a a . . . . . .
    . . . . a a a a a a . . . . . .
    . . . . a a a a 4 a . . . . . .
    . . . . . a a a 4 4 . . . . . .
    . . . . . . . . . 4 4 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
"""), SpriteKind.food)
tiles.place_on_tile(powerup1, tiles.get_tile_location(10, 6))

def on_overlap(sprite, otherSprite):
    otherSprite.destroy(effects.cool_radial, 100)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)

# Powerup two
powerup2 = sprites.create(img("""
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
"""), SpriteKind.projectile)
tiles.place_on_tile(powerup2, tiles.get_tile_location(57, 4))

def on_overlap2(sprite, otherSprite):
    otherSprite.destroy(effects.cool_radial, )
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_overlap2)

# enemies setup
def on_hit_tile(sprite):
    game.over()
scene.on_hit_tile(SpriteKind.player, 2, on_hit_tile)


dog = sprites.create(img("""
    . . 4 4 4 . . . . 4 4 4 . . . .
    . 4 5 5 5 e . . e 5 5 5 4 . . .
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
    . e e 5 5 5 5 5 5 5 5 e e . . .
    . . e 5 f 5 5 5 5 f 5 e . . . .
    . . f 5 5 5 4 4 5 5 5 f . . f f
    . . f 4 5 5 f f 5 5 6 f . f 5 f
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f
    . . . f 4 5 5 5 5 5 5 4 4 5 f .
    . . . f 5 5 5 5 5 4 5 5 f f . .
    . . . f 5 f f f 5 f f 5 f . . .
    . . . f f . . f f . . f f . . .
"""))
tiles.place_on_tile(dog, tiles.get_tile_location(44, 8))
dog.set_kind(SpriteKind.enemy)
dog.ay = 300


def on_hit_tile2(cat):
    dog.follow(cat, 85)
scene.on_hit_tile(SpriteKind.player, 13 , on_hit_tile2)


# win/lose effect