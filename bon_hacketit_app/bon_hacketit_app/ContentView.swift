//
//  ContentView.swift
//  bon_hacketit_app
//
//  Created by Shinjan Patra on 09/04/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
       FeedView()
            .preferredColorScheme(.light)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
