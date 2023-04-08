//
//  Tab.swift
//  bon_hacketit_app
//
//  Created by Shinjan Patra on 09/04/23.
//

import SwiftUI

struct Tab: Identifiable{
    var id: String = UUID().uuidString
    var tabImage: String
    var tabName: String
    var tabOffset: CGSize
}

var tabs: [Tab] = [
    .init(tabImage: "biriyani", tabName: "Hot\nbiriyani", tabOffset: CGSize(width: 0, height: -40)),
    .init(tabImage: "snacks", tabName: "Samosas", tabOffset: CGSize(width: 0, height: -38))
]
