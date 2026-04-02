/**
 * Controls column resize behavior together with the table’s layout algorithm (`table-layout` in CSS).
 *
 * - `fixed`: Dragging a column edge resizes that column and the next column in opposite directions, so the overall table width tends to stay the same (splitter between two columns).
 *
 * - `auto`: Only the resized column changes width; other columns stay as they are, and the total table width can grow or shrink. Suited to very wide tables and horizontal scroll.
 */
export type DataTableTableLayout = 'fixed' | 'auto';
