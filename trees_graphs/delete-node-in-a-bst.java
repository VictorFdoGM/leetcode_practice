/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {

    public TreeNode deleteNode(TreeNode root, int key) {
        
        // Si queremos borrar una hoja entonces return null
        // Si el node que queremos borrar solo tiene hijos left o right podemos intercambiar los links haciendo que el parent tome como hijo al grandchild
        // si el node tiene ambos hijos empieza la parte tricky, para nuestro ejemplo remplazaremos al sucesor del nodo.
        // por ejemplo si nuestro nodo tiene valor 10, nuestro child de la derecha tiene valor 14, y este tiene un child left con valor 11, 
        // el sucessor de mi nodo 10 es el nodo con el valor mas proximo en orden, siento para nuestro ejemplo el 11. Actualizamos el valor exclusivamente de nuestro nodo actual
        // Sobreescribimos el 10 con el 11, y ahora borramos el nodo 11, aplicando esta misma logica.

        if (root == null) return null;

        //Search for the node 
        if (key < root.val) {
            root.left = deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = deleteNode(root.right, key);
        } else {
            //Found the node to delete

            //If left is empty we return the right subtree, if right subtree is null is not a problem, this is like removing a leaf
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }

            //Find successor
            TreeNode succesor = root.right;
            while (succesor.left != null) {
                succesor = succesor.left;
            }
            //Update curr val with successor value
            root.val = succesor.val;
            //Now we delete successor node
            root.right = deleteNode(root.right, root.val);
        }

        return root;
    }
}