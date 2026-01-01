
from playwright.sync_api import sync_playwright
import os

def run():
    # Get the absolute path to the problems directory
    cwd = os.getcwd()
    merge_sort_path = f'file://{cwd}/problems/merge_sort.html'
    bfs_path = f'file://{cwd}/problems/bfs_graph.html'

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Verify Merge Sort
        print(f'Navigating to {merge_sort_path}')
        page.goto(merge_sort_path)
        page.screenshot(path='verification/merge_sort_screenshot.png', full_page=True)
        print('Took screenshot of Merge Sort')

        # Verify BFS
        print(f'Navigating to {bfs_path}')
        page.goto(bfs_path)
        page.screenshot(path='verification/bfs_screenshot.png', full_page=True)
        print('Took screenshot of BFS')

        browser.close()

if __name__ == '__main__':
    run()
