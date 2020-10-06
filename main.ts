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
    ..............33...6.e..11..e......88888..6..........77......aaa.............fff
    ..............33..............33...88888.........77..........aaa.............fff
    ...e5e522e5...33.......e5e5...33...88888.....................aaa.............fff
    ...e5e522e5...33.......e5e5...33...88888.....................aaa.............fff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
`)
// mirror
scene.setTile(1, img`
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
`, true)
let mirror = sprites.create(img`
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
`)
mirror.setPosition(400, 79)
// oven
scene.setTile(2, img`
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
`, true)
let oven = sprites.create(img`
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
`, SpriteKind.Projectile)
oven.setPosition(128, 128)
scene.onHitTile(SpriteKind.Player, 2, function on_hit_oven(sprite: Sprite) {
    game.over(false)
})
// fridge
scene.setTile(3, img`
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
`, true)
let fridge = sprites.create(img`
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
`)
fridge.setPosition(240, 112)
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
// Cabinet
scene.setTile(5, img`
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
`, true)
scene.setTile(14, img`
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
`, true)
// room separation
scene.setTile(6, img`
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
// library shelves
scene.setTile(7, img`
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
// Toilet
scene.setTile(3, img`
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
`, true)
let toilet = sprites.create(img`
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
`)
toilet.setFlag(SpriteFlag.ShowPhysics, true)
toilet.setPosition(495, 120)
// bookshelf
scene.setTile(10, img`
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
//  powerup2 = sprites.create(img("""
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . 2 2 2 2 2 . . . . . .
//      . . . . 2 2 2 2 2 2 2 . . . . .
//      . . . . 2 2 2 2 2 2 2 . . . . .
//      . . . . 2 2 2 2 2 2 2 . . . . .
//      . . . . 2 2 2 2 2 2 2 . . . . .
//      . . . . 2 2 2 2 2 2 2 . . . . .
//      . . . . . 2 2 2 2 2 . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//  """), SpriteKind.projectile)
//  tiles.place_on_tile(powerup2, tiles.get_tile_location(57, 4))
//  def on_overlap2(sprite, otherSprite):
//      otherSprite.destroy(effects.cool_radial, )
//  sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_overlap2)
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
