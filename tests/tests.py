import unittest
import demineur

class TestGridGenerator(unittest.TestCase):

    def test_good(self):
        self.assertEqual(demineur.gridGenerator(5, 10, 0), [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0]], 'should display correctly')

    def test_bad(self):
        self.assertEqual(demineur.gridGenerator(5, 10, 0), [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0]], 'should not display correctly')

if __name__ == '__main__':
    unittest.main()