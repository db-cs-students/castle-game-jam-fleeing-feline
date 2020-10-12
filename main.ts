/** 
Title: Fleeing Feline
Creators: Mei and Caroline
Description: A cat trying to escape their castle and dodge various enemies

 */
//  game setup
scene.setBackgroundImage(img`
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
`)
//  Tilemap 
scene.setTileMap(img`
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
`)
//  scene.set_tile(1, img("""
//      ................................
//      ................................
//      ................................
//      ...........eeeeeeeeee...........
//      .........ee1111111111ee.........
//      ........e11111111111111e........
//      ........e11111111111111e........
//      .......e1111111111111111e.......
//      .......e1111111111111111e.......
//      ......e111111111111111111e......
//      ......e111111111111111111e......
//      .....e11111111111111111111e.....
//      .....e11111111111111111111e.....
//      .....e11111111111111111111e.....
//      ....e1111111111111111111111e....
//      ....e1111111111111111111111e....
//      ....e1111111111111111111111e....
//      ....e1111111111111111111111e....
//      ....e1111111111111111111111e....
//      .....e11111111111111111111e.....
//      .....e11111111111111111111e.....
//      .....e11111111111111111111e.....
//      ......e111111111111111111e......
//      ......e111111111111111111e......
//      .......e1111111111111111e.......
//      .......e1111111111111111e.......
//      ........e11111111111111e........
//      ........e11111111111111e........
//      .........ee1111111111ee.........
//      ...........eeeeeeeeee...........
//      ................................
//      ................................
//  """), True)
scene.setTile(1, img`
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
`, true)
scene.setTile(2, img`
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
`, true)
scene.setTile(3, img`
    ...cccccccccc...
    ..c1111111111c..
    .c111111111111c.
    .c111111111111c.
    .c111111111cc1c.
    .f1111111111c1f.
    .f1111111111c1f.
    f11111111111c11f
    f1111111111cc11f
    fc111111111111cf
    f1bbbbbbbbbbbb1f
    f11111111111111f
    f1111111111cc11f
    f11111111111c11f
    f11111111111c11f
    f11111111111c11f
    f11111111111c11f
    f11111111111c11f
    c1111111111c111f
    c11111111111111c
    c11111111111111c
    .cccccccccccccc.
    .fbbfbbbbbbfbbf.
    ..ff........ff..
`, true)
scene.setTile(4, img`
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
`, true)
scene.setTile(6, img`
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
`, true)
scene.setTile(7, img`
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
`, true)
scene.setTile(8, img`
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
`, true)
scene.setTile(9, img`
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
`, true)
scene.setTile(10, img`
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
`, true)
scene.setTile(11, img`
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
`, true)
scene.setTile(12, img`
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
`, true)
scene.setTile(13, img`
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
`, true)
scene.setTile(14, img`
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
`, true)
scene.setTile(15, img`
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
`)
//  player setup
let cat = sprites.create(img`
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
`, SpriteKind.Player)
scene.cameraFollowSprite(cat)
cat.ay = 300
tiles.placeOnTile(cat, tiles.getTileLocation(0, 8))
// Player controls
controller.moveSprite(cat, 100, 0)
let double_jump = true
controller.A.onEvent(ControllerButtonEvent.Pressed, function jump() {
    
    if (double_jump) {
        cat.vy = -140
        double_jump = cat.isHittingTile(CollisionDirection.Bottom)
    }
    
})
game.onUpdate(function on_update() {
    
    if (cat.isHittingTile(CollisionDirection.Bottom)) {
        double_jump = true
    }
    
})
//  powerup one
let powerup1 = sprites.create(img`
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
`, SpriteKind.Food)
tiles.placeOnTile(powerup1, tiles.getTileLocation(10, 6))
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.coolRadial, 100)
})
//  Powerup two
let powerup2 = sprites.create(img`
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
`, SpriteKind.Projectile)
tiles.placeOnTile(powerup2, tiles.getTileLocation(57, 4))
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.coolRadial)
})
//  enemies setup
scene.onHitTile(SpriteKind.Player, 2, function on_hit_tile(sprite: Sprite) {
    game.over()
})
let dog = sprites.create(img`
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
`)
tiles.placeOnTile(dog, tiles.getTileLocation(44, 8))
dog.setKind(SpriteKind.Enemy)
dog.ay = 300
scene.onHitTile(SpriteKind.Player, 13, function on_hit_tile2(cat: Sprite) {
    dog.follow(cat, 85)
})
